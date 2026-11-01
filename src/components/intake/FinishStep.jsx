// Last step: scope result, send TaxCare's copy, and give the taxpayer their own 13614-C.
import { useState, useEffect } from "react";
import { screenScope } from "../../data/scope";
import { bookingUrl } from "../../config";
// The PDF library is large, so it loads only when a form is actually generated.
const loadFiller = () => import("../../pdf/fill13614C").then((m) => m.fill13614C);
const load14446 = () => import("../../pdf/fill14446").then((m) => m.fill14446);

const LOCATOR = "https://freetaxassistance.for.irs.gov/s/sitelocator";

// Reference like TC-261028-7KQ4M (date + 5 random characters, no look-alike letters).
function newReference() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const rand = crypto.getRandomValues(new Uint8Array(5));
  return `TC-${ymd}-${Array.from(rand, (n) => alphabet[n % alphabet.length]).join("")}`;
}

function saveFile(bytes, filename) {
  const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

export default function FinishStep({ formData, onEdit }) {
  const scope = screenScope(formData);
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState({ phase: "idle" }); // idle | sending | sent | error
  const [downloading, setDownloading] = useState(false);
  const [downloading14446, setDownloading14446] = useState(false);
  const p = formData.personal || {};
  const name = [p.firstName, p.lastName].filter(Boolean).join(" ");

  // Out of scope: tell staff that a screening happened and why, with no personal details.
  // Sent once per browser session for the same set of reasons, so going back and forth doesn't repeat it.
  const outIds = scope.status === "out" ? scope.hits.filter((h) => h.level === "out").map((h) => h.id).sort() : [];
  const outKey = outIds.join(",");
  useEffect(() => {
    if (!outKey) return;
    const flag = `tc-screened:${outKey}`;
    try {
      if (sessionStorage.getItem(flag)) return;
      sessionStorage.setItem(flag, "1");
    } catch {}
    fetch("/api/screened", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reasons: outKey.split(","), website: "" }),
      keepalive: true,
    }).catch(() => {});
  }, [outKey]);

  const download = async () => {
    setDownloading(true);
    try {
      const fill13614C = await loadFiller();
      const bytes = await fill13614C(formData);
      saveFile(bytes, `Form-13614-C-${(p.lastName || "intake").replace(/[^a-z0-9]/gi, "")}.pdf`);
    } catch (e) {
      alert("Sorry, we couldn't create your form. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const download14446 = async () => {
    setDownloading14446(true);
    try {
      const fill14446 = await load14446();
      const bytes = await fill14446(formData);
      saveFile(bytes, `Form-14446-${(p.lastName || "consent").replace(/[^a-z0-9]/gi, "")}.pdf`);
    } catch (e) {
      alert("Sorry, we couldn't create your form. Please try again.");
    } finally {
      setDownloading14446(false);
    }
  };

  const submit = async () => {
    setState({ phase: "sending" });
    try {
      const submittedAt = new Date().toISOString();
      const reference = newReference();
      const fill13614C = await loadFiller();
      const staffPdf = await fill13614C(formData, { staffSummary: { reference, submittedAt, scope, name } });
      const body = new FormData();
      body.append("pdf", new Blob([staffPdf], { type: "application/pdf" }), "13614-C.pdf");
      body.append("reference", reference);
      body.append("summary", JSON.stringify({ reference, submittedAt, scope, formData }));
      body.append("website", ""); // spam trap; real visitors never fill this
      const res = await fetch("/api/submit", { method: "POST", body });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.reference) throw new Error(json.error || "Submit failed");
      setState({ phase: "sent", reference: json.reference });
    } catch (e) {
      setState({ phase: "error", message: e.message });
    }
  };

  const downloadButton = (
    <button
      type="button"
      onClick={download}
      disabled={downloading}
      className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-800 font-semibold hover:bg-emerald-50 disabled:opacity-50"
    >
      {downloading ? "Preparing your form…" : "Download my Form 13614-C"}
    </button>
  );

  const download14446Button = (
    <button
      type="button"
      onClick={download14446}
      disabled={downloading14446}
      className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-800 font-semibold hover:bg-emerald-50 disabled:opacity-50"
    >
      {downloading14446 ? "Preparing your form…" : "Download my Form 14446"}
    </button>
  );

  const bookLink = state.phase === "sent" ? bookingUrl(state.reference) : "";
  const bookButton = bookLink ? (
    <a
      href={bookLink}
      target="_blank"
      rel="noreferrer"
      className="inline-flex px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
    >
      Book my appointment
    </a>
  ) : null;
  const joint = p.maritalStatus === "married";

  if (state.phase === "sent") {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-emerald-800">Thank you{p.firstName ? `, ${p.firstName}` : ""}! Your intake was received.</h2>
        <p className="text-gray-700">
          Your reference number is <strong className="font-mono">{state.reference}</strong>. Please keep it for your records.
        </p>
        <div className="space-y-3 text-gray-700">
          <p><strong>What happens next:</strong></p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              {bookButton
                ? "Book your 30-minute video appointment (Zoom or Google Meet) with the button below. Your reference number is filled in for you."
                : "A volunteer will contact you, usually within one business day, to schedule your 30-minute video appointment (Zoom or Google Meet)."}
            </li>
            <li>
              At your appointment, a volunteer confirms your identity, goes over your answers, and explains Form 14446, the IRS consent form for
              virtual tax help. Have your photo ID and the Social Security cards or ITIN letters for everyone on your return
              ready{joint ? ". If you're filing jointly, both spouses need to attend" : ""}.
            </li>
            <li>
              After your appointment, we'll email you an invitation to our secure TaxSlayer portal. Create your login, sign Form 14446
              {joint ? " (both spouses)" : ""}, and upload your tax documents.
            </li>
            <li>A volunteer prepares your return, and a second volunteer reviews it.</li>
            <li>You review and sign your return in the portal, and we e-file it.</li>
          </ol>
          <p>
            See <a href="/documents" className="underline text-emerald-800">what to have ready</a>.
          </p>
        </div>
        <p className="text-gray-700">
          Download your completed Form 13614-C for your records, and your Form 14446 to read before your appointment. We've filled in Form
          14446 for you; you'll sign it in the portal, so there's nothing to print or send back.
        </p>
        <div className="flex flex-wrap gap-3">
          {bookButton}
          {downloadButton}
          {download14446Button}
          <a href="/" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Review and Submit</h2>

      {scope.status === "out" ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 space-y-3">
          <h3 className="text-lg font-semibold text-amber-900">Our volunteers may not be able to prepare your return this year</h3>
          <p className="text-amber-900">
            Our site prepares returns within the IRS's Basic certification. Based on your answers, your return includes:
          </p>
          <ul className="list-disc ml-6 text-amber-900">
            {scope.hits.filter((h) => h.level === "out").map((h) => <li key={h.id}>{h.text}</li>)}
          </ul>
          <p className="text-amber-900">
            Other free IRS volunteer sites may be able to help. Find one near you with the{" "}
            <a href={LOCATOR} target="_blank" rel="noreferrer" className="underline font-semibold text-amber-900">IRS free tax help locator</a>.
            If you think an answer was a mistake, you can go back and change it, or <a href="/contact" className="underline font-semibold text-amber-900">contact us</a>.
          </p>
          <p className="text-sm text-amber-900">Your name and answers have not been sent to anyone. You can still download your completed form below to take to another site.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {downloadButton}
            <button type="button" onClick={onEdit} className="px-6 py-3 rounded-lg border font-semibold">Go back and change answers</button>
          </div>
        </div>
      ) : (
        <>
          <div className={`rounded-xl border p-5 space-y-2 ${scope.status === "review" ? "border-sky-200 bg-sky-50" : "border-emerald-200 bg-emerald-50"}`}>
            <h3 className="text-lg font-semibold">
              {scope.status === "review" ? "It looks like we can help — a volunteer will confirm a few details" : "Good news — it looks like we can help with your return"}
            </h3>
            {scope.status === "review" && (
              <>
                <p>A volunteer will go over these items with you at your appointment:</p>
                <ul className="list-disc ml-6">{scope.hits.map((h) => <li key={h.id}>{h.text}</li>)}</ul>
              </>
            )}
          </div>

          <p className="text-gray-700">
            Next, you'll book a 30-minute video appointment where a volunteer confirms your identity, goes over your answers, and explains
            the IRS consent form for virtual help (Form 14446). After that, you sign the form and upload your documents in our secure portal.
          </p>

          <div className="space-y-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-600" />
              <span className="text-gray-800">
                I confirm my answers are complete and accurate to the best of my knowledge, and I agree to send this information to The TaxCare Group
                so its IRS-certified volunteers can prepare my return. See our <a href="/privacy" className="underline text-emerald-800">privacy policy</a>.
              </span>
            </label>
            {state.phase === "error" && (
              <div role="alert" className="space-y-3">
                <p className="text-red-700">
                  We couldn't send your intake right now. Please try again in a few minutes, or download your form and <a href="/contact" className="underline">contact us</a>.
                </p>
                {downloadButton}
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={submit}
                disabled={!agree || state.phase === "sending"}
                className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.phase === "sending" ? "Sending…" : "Submit my intake"}
              </button>
              <button type="button" onClick={onEdit} className="px-6 py-3 rounded-lg border font-semibold">Go back and change answers</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
