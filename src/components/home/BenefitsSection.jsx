import { motion } from 'framer-motion'
import SectionFade from '../ui/SectionFade'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function BenefitsSection() {
  return (
    <SectionFade>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >

          <motion.div variants={item} className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1
  transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">100% Free</h3>
            <p className="text-gray-700 text-sm">
              No hidden fees. No upsells. Ever.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1
  transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">IRS-Certified</h3>
            <p className="text-gray-700 text-sm">
              All volunteers are IRS VITA/TCE certified.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1
  transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Secure & Virtual</h3>
            <p className="text-gray-700 text-sm">
              File safely without leaving your home.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </SectionFade>
  )
}
