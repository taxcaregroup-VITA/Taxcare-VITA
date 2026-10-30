import { PORTAL_OPTION } from "../config";

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
        <p className="text-gray-700">
          The TaxCare Group, Inc. uses your information only to prepare and file your tax return through the IRS Volunteer Income Tax
          Assistance (VITA) program. We do not sell or share it for any other purpose.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">What we collect</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Your answers to the online intake (IRS Form 13614-C), including names, dates of birth, contact details, household members, and types of income and expenses.</li>
          <li>Messages you send through our contact form.</li>
          {PORTAL_OPTION && <li>If you choose our secure portal: the documents you upload and the forms you sign there.</li>}
          <li>The online intake does not ask for Social Security numbers or bank account numbers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">How we protect it</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Intakes are sent over an encrypted connection and stored in private storage with no public link. Only authorized TaxCare Group staff can open them.</li>
          <li>{PORTAL_OPTION ? "Documents and signatures are exchanged through the IRS-provided TaxSlayer software and its secure customer portal." : "Your return is prepared in the IRS-provided TaxSlayer software."}</li>
          <li>Volunteers follow IRS privacy and security rules for VITA sites (IRS Publication 4299).</li>
          <li>Please don't email or text us tax documents.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">How long we keep it</h2>
        <p className="text-gray-700">
          After the IRS accepts your return, we delete the copies of your intake and documents that we hold. If we can't prepare your
          return, we delete your intake once we have told you. If our screening shows your return is outside what we can prepare, your
          answers are never sent to us at all.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Sharing</h2>
        <p className="text-gray-700">
          We share your information only with the IRS (and your state, when we file a state return) to file your return, or when the law
          requires it. We never use it to market other services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Questions</h2>
        <p className="text-gray-700">
          Use our <a href="/contact" className="underline text-emerald-800">contact form</a>. See also <a href="/rights" className="underline text-emerald-800">Your Rights</a>.
        </p>
      </section>
    </div>
  );
}
