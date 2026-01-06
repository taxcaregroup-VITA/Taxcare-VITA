export default function FAQ() {
  const faqs = [
    {
      q: 'Who can use this service?',
      a: 'Individuals earning $60k or less, seniors, and first-time filers.',
    },
    {
      q: 'Is this service free?',
      a: 'Yes! All tax preparation is completely free.',
    },
    {
      q: 'Can I file from home?',
      a: 'Yes, our platform is fully virtual and secure.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6 max-w-2xl mx-auto">
        {faqs.map((f, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-gray-800 mb-1">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
