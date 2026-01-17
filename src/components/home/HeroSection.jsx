import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Rated 5 stars</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Free Virtual Tax Help
            </h1>

            <p className="text-xl text-emerald-100 mb-8 max-w-xl">
              IRS-Certified VITA volunteers provide 100% free tax preparation — securely from your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <button className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </button>
              </Link>
            </div>

            <div className="mt-6">
              <a 
                href="https://irs.treasury.gov/freetaxprep/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span className="underline">Find Help Near You</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Tax preparation"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-emerald-900 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-slate-600">Free</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
