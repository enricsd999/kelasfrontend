export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="text-center border-b border-gray-200 dark:border-gray-700 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            We'd love to hear from you
          </p>
        </header>

        {/* Form + info */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>

          <blockquote className="border-l-4 border-blue-600 pl-6 flex items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white italic">
              "Questions, ideas, or just a hello — our inbox is always open."
            </p>
          </blockquote>
        </section>

        {/* Colophon / footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <dl className="flex flex-col md:flex-row md:justify-between gap-6 text-sm">
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Office hours</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-400">Monday–Friday, 9–5</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Write</dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@mywebsite.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                >
                  hello@mywebsite.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Visit</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-400">123 Main Street, Anytown</dd>
            </div>
          </dl>
        </footer>
      </div>
    </div>
  );
}
