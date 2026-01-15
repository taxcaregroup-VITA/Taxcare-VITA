export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions? Need assistance? Reach out to our team using the form below.
      </p>
      <form className="flex flex-col gap-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" />
        <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" />
        <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows="4" />
        <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">
          Send Message
        </button>
      </form>
    </div>
  )
}
