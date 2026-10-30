import { CIVIL_RIGHTS, VOLTAX_EMAIL } from "../data/site";

export default function Rights() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">Your Rights</h1>
        <p className="text-lg text-gray-700">
          The TaxCare Group is an IRS Volunteer Income Tax Assistance (VITA) site. These protections apply every time you work with us,
          in person or online.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Your civil rights are protected</h2>
        <p className="text-gray-700">
          VITA sites receive federal assistance. Discrimination is not allowed on the basis of race, color, national origin
          (including limited English proficiency), disability, sex, age, or religion.
        </p>
        <p className="text-gray-700">If you believe you have been discriminated against, you can file a written complaint with:</p>
        <address className="not-italic rounded-xl bg-gray-50 border p-5 text-gray-800">
          {CIVIL_RIGHTS.office}
          <br />
          {CIVIL_RIGHTS.address}
          <br />
          Email: <a className="underline text-emerald-800" href={`mailto:${CIVIL_RIGHTS.email}`}>{CIVIL_RIGHTS.email}</a>
        </address>
        <p className="text-gray-700">
          More information: <a className="underline text-emerald-800" href="https://www.irs.gov/about-irs/your-civil-rights-are-protected" target="_blank" rel="noreferrer">IRS, Your civil rights are protected</a> (IRS Publication 4053).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Our volunteers' standards</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Every volunteer who prepares or reviews returns is certified by the IRS and has signed the IRS volunteer agreement (Form 13615).</li>
          <li>Our service is free. Volunteers may not accept payment, tips or gifts for preparing your return.</li>
          <li>A second certified volunteer reviews every return before it is filed.</li>
          <li>Volunteers keep your information confidential and use it only to prepare your return.</li>
        </ul>
        <p className="text-gray-700">
          To report unethical behavior by a volunteer, email the IRS at{" "}
          <a className="underline text-emerald-800" href={`mailto:${VOLTAX_EMAIL}`}>{VOLTAX_EMAIL}</a> (IRS Publication 4836).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">You are responsible for your return</h2>
        <p className="text-gray-700">
          You'll review your return before it is filed and sign Form 8879 to authorize e-filing. Please check names, Social Security
          numbers, income and bank details carefully, and tell us if anything looks wrong.
        </p>
      </section>
    </div>
  );
}
