import { Link } from "react-router-dom";
import { INCOME_GUIDELINE, SITE_LOCATOR } from "../data/site";
import { PORTAL_OPTION } from "../config";

const faqs = [
  {
    q: "Who can use your service?",
    a: <>VITA sites generally help people who earn about {INCOME_GUIDELINE} or less, people with disabilities, and taxpayers who need help in a language other than English. Everyone on the return needs a valid Social Security number or ITIN.</>,
  },
  {
    q: "Is it really free?",
    a: <>Yes. There are no fees of any kind, and our volunteers may not accept payment or tips.</>,
  },
  {
    q: "What kinds of returns can you prepare?",
    a: <>Our volunteers hold the IRS Basic certification, which covers most wage, retirement, Social Security and unemployment income, and common credits like the earned income and child tax credits. Self-employment, selling stocks or a home, rental income, health savings accounts and Marketplace insurance (Form 1095-A) are outside what we can prepare. The online intake tells you right away.</>,
  },
  {
    q: "What if my return is outside your scope?",
    a: <>Other free IRS volunteer sites may hold more advanced certifications. Find one with the <a href={SITE_LOCATOR} target="_blank" rel="noreferrer" className="underline text-emerald-800">IRS site locator</a>.</>,
  },
  {
    q: "Do I need to visit a location?",
    a: PORTAL_OPTION
      ? <>No. You can meet with a volunteer by appointment, or skip the appointment and upload your documents and sign through our secure portal. Either way, a certified volunteer talks with you by phone, and a short video call confirms your identity.</>
      : <>No. Our services are virtual: a volunteer meets with you by phone or video at a scheduled time.</>,
  },
  {
    q: "What should I have ready?",
    a: <>Photo ID, Social Security cards or ITIN letters for everyone on your return, and all your tax forms. See the full list on <Link to="/documents" className="underline text-emerald-800">What to Have Ready</Link>.</>,
  },
  {
    q: "How is my information protected?",
    a: <>See our <Link to="/privacy" className="underline text-emerald-800">privacy policy</Link> and <Link to="/rights" className="underline text-emerald-800">Your Rights</Link>.</>,
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h1>
      <div className="divide-y border-y">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="cursor-pointer list-none flex justify-between gap-4 text-lg font-semibold">
              {q}
              <span aria-hidden="true" className="text-emerald-700 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-gray-700">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
