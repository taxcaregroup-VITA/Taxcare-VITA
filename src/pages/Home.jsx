import { Link } from "react-router-dom";
import {
  ArrowRight, MapPin, Shield, Award, Monitor, Lock,
  DollarSign, Flag, Calendar, Clock, Check, FileText,
} from "lucide-react";

const LOCATOR = "https://irs.treasury.gov/freetaxprep/";

const features = [
  { icon: Shield, title: "100% Free Service", text: "No hidden fees. Ever.", tile: "bg-emerald-100 text-emerald-700" },
  { icon: Award, title: "IRS-Certified Volunteers", text: "Trained professionals you can trust", tile: "bg-blue-100 text-blue-700" },
  { icon: Monitor, title: "Virtual Preparation", text: "Complete everything from home", tile: "bg-purple-100 text-purple-700" },
  { icon: Lock, title: "Secure & Private", text: "Your data is protected", tile: "bg-amber-100 text-amber-700" },
];

const eligibility = [
  { icon: DollarSign, title: "Household income under $67,000" },
  { icon: Flag, title: "U.S. residents" },
  { icon: Calendar, title: "Valid SSN or ITIN" },
  { icon: Clock, title: "Simple returns" },
];

const steps = [
  { title: "Answer a few questions", text: "Complete the IRS intake form online. It takes about 15 minutes." },
  { title: "We confirm we can help", text: "Your answers are checked right away against what our volunteers are certified to prepare." },
  { title: "File with a volunteer", text: "An IRS-certified volunteer prepares your return and reviews it with you." },
];

// Hero photo: Unsplash (free to use under the Unsplash License), served from Unsplash's image CDN.
const HERO_PHOTO = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Free Tax Help From Home
            </h1>
            <p className="text-lg md:text-2xl text-emerald-50/90 max-w-xl">
              Get your taxes done by IRS-certified volunteers — 100% free for households earning under $67,000
            </p>
            <div className="flex flex-col items-start gap-5 pt-2">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-emerald-50 transition"
              >
                Get Started <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={LOCATOR} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-100 underline underline-offset-4 hover:text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" /> Find In-Person Help
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[12/7]">
              <img
                src={HERO_PHOTO}
                alt="Hands sorting tax forms and receipts next to a calculator"
                className="h-full w-full object-cover"
                width="1200"
                height="700"
                fetchpriority="high"
              />
            </div>
            <div className="absolute -bottom-8 left-4 sm:-left-8 bg-white text-gray-900 rounded-2xl shadow-xl px-7 py-5">
              <p className="text-4xl font-extrabold text-emerald-800">100%</p>
              <p className="text-gray-600">Free Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {features.map(({ icon: Icon, title, text, tile }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className={`h-20 w-20 rounded-2xl flex items-center justify-center ${tile}`}>
                <Icon className="h-9 w-9" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold mt-3">{title}</h2>
              <p className="text-gray-600 max-w-[16rem]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who can use our service */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Who Can Use Our Service?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eligibility.map(({ icon: Icon, title }) => (
              <div key={title} className="bg-white rounded-2xl shadow-sm p-7 flex items-start gap-4">
                <div className="h-14 w-14 shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <Check className="h-5 w-5 text-emerald-600 mb-2" aria-hidden="true" />
                  <p className="font-semibold text-lg leading-snug">{title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10">
            Not sure if your return qualifies? Start the intake — we'll tell you right away.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">How It Works</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-gray-100 p-8 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">{i + 1}</span>
              <h3 className="text-xl font-semibold mt-5">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Call to action */}
      <section className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <FileText className="h-10 w-10 text-emerald-200" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold">Ready to file your taxes for free?</h2>
          </div>
          <Link to="/get-started" className="inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition">
            Get Started <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
