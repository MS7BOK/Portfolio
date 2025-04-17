const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Let's work together or just have a chat. Send me a message and I’ll get back to you soon.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
