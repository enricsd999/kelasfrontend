import FeatureList from "../components/props/FeatureList";

const features = [
  {
    id: 1,
    title: "Simple",
    description: "Easy to understand structure suitable for learning React.",
  },
  {
    id: 2,
    title: "Reusable",
    description: "The page is divided into reusable React components.",
  },
  {
    id: 3,
    title: "Responsive",
    description: "Tailwind CSS makes it easy to build responsive layouts.",
  },
];

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="text-center border-b border-gray-200 dark:border-gray-700 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-blue-600 dark:text-blue-400">Features</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            What makes this project easy to build with
          </p>
        </header>

        {/* Intro + pull quote */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              This project is built entirely with React and Tailwind CSS,
              split into small, reusable components that are easy to follow
              and extend.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Each piece — from the layout to the individual cards — is kept
              simple on purpose, so the structure stays clear whether you're
              learning React for the first time or building on top of it.
            </p>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 flex items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white italic">
              "Simple components, composed together, build something awesome."
            </p>
          </blockquote>
        </section>

        {/* Feature grid */}
        <section className="bg-white dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What's included
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
            A quick look at the core ideas behind how this site is put
            together.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureList
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
