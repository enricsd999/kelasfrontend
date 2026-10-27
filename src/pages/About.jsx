export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="text-center border-b border-gray-200 dark:border-gray-700 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Odette Marsh</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">Bristol, UK</p>
        </header>

        {/* Bio + pull quote */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Odette runs a small letterpress studio from a converted stable in
              the Somerset hills, printing on a hundred-year-old Vandercook and
              a cabinet of wood and metal type collected over two decades.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              She trained as a graphic designer before apprenticing under a
              retiring printer in Devon, and now splits her time between
              commissioned broadsides, small print runs for local writers, and
              teaching newcomers to set type by hand.
            </p>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 flex items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white italic">
              "Ink remembers the pressure of the hand that set it."
            </p>
          </blockquote>
        </section>

        {/* Practice */}
        <section className="bg-white dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-700 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Practice</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Her work moves between hand-set metal type and carved wood
            letterforms, from one-off broadsides to short runs for independent
            poets, alongside small-group workshops for anyone wanting to learn
            the press.
          </p>
        </section>

        {/* Colophon / footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <dl className="flex flex-col md:flex-row md:justify-between gap-6 text-sm">
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Studio hours</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-400">Tuesday–Saturday, 10–5</dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Write</dt>
              <dd className="mt-1">
                <a
                  href="mailto:odette@marshpress.co"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
                >
                  odette@marshpress.co
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900 dark:text-white">Visit</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-400">14 Coombe Lane, Somerset</dd>
            </div>
          </dl>
        </footer>
      </div>
    </div>
  );
}

