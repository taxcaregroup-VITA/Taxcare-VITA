import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setState("sent");
    } catch {
      setState("error");
    }
  };

  const field = "border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
      {state === "sent" ? (
        <p role="status" className="rounded-xl bg-emerald-50 border border-emerald-100 p-5 text-emerald-900">
          Thank you. Your message was received, and a volunteer will get back to you.
        </p>
      ) : (
        <>
          <p className="text-gray-700">
            Have a question? Send us a message. Please don't include Social Security numbers, bank details or tax documents.
          </p>
          <form onSubmit={submit} className="space-y-4 max-w-xl">
            <label className="block">
              <span className="block mb-1 text-sm font-medium">Your name</span>
              <input required maxLength={100} value={form.name} onChange={set("name")} className={field} />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="block mb-1 text-sm font-medium">Email</span>
                <input type="email" maxLength={200} value={form.email} onChange={set("email")} className={field} />
              </label>
              <label className="block">
                <span className="block mb-1 text-sm font-medium">Phone</span>
                <input type="tel" maxLength={30} value={form.phone} onChange={set("phone")} className={field} />
              </label>
            </div>
            <p className="text-xs text-gray-500">Please give an email or a phone number so we can reply.</p>
            <label className="block">
              <span className="block mb-1 text-sm font-medium">Message</span>
              <textarea required maxLength={2000} rows={5} value={form.message} onChange={set("message")} className={field} />
            </label>
            {/* Spam trap: hidden from people, filled in only by bots. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} className="hidden" aria-hidden="true" />
            {state === "error" && <p role="alert" className="text-red-700">We couldn't send your message. Please try again in a few minutes.</p>}
            <button
              type="submit"
              disabled={state === "sending" || (!form.email && !form.phone)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50"
            >
              {state === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
