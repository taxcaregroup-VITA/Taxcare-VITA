// Last step: scope result, send TaxCare's copy, and give the taxpayer their own 13614-C.
import { useState } from "react";
import { screenScope } from "../../data/scope";
// The PDF library is large, so it loads only when a form is actually generated.
const loadFiller = () => import("../../pdf/fill13614C").then((m) => m.fill13614C);

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
  const p = formData.personal || {};
  const name = [p.firstName, p.lastName].filter(Boolean).join(" ");

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

  if (state.phase === "sent") {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-emerald-800">Thank you{p.firstName ? `, ${p.firstName}` : ""}! Your intake was received.</h2>
        <p className="text-gray-700">
          Your reference number is <strong className="font-mono">{state.reference}</strong>. Please keep it for your records.
          A TaxCare Group volunteer will contact you to schedule your appointment.
        </p>
        <p className="text-gray-700">
          Download a copy of your completed Form 13614-C. Please have it, your photo ID, and Social Security cards or ITIN letters for everyone on your return ready for your appointment.
        </p>
        {downloadButton}
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
          <p className="text-sm text-amber-900">Your answers have not been sent to anyone. You can still download your completed form below to take to another site.</p>
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
                <p>A volunteer will review these items with you before your appointment:</p>
                <ul className="list-disc ml-6">{scope.hits.map((h) => <li key={h.id}>{h.text}</li>)}</ul>
              </>
            )}
          </div>

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
