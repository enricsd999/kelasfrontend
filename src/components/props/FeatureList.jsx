export default function FeatureList({ id, title, description }) {
  return (
    <div
      key={id}
      className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition"
    >
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold text-xl">
        {id}
      </div>

      <h3 className="text-xl font-semibold mt-5">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
}
