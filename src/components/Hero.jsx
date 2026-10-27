import { useState } from "react";

function Hero() {
  const [hidden, setHidden] = useState(false);
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-24 text-center">
      {hidden && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          {/* Modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
            {/* Close button */}
            <button
              onClick={() => {
                setHidden(false);
              }}
              type="button"
              className="absolute right-4 top-4 text-xl text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-200"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login</h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to continue to your account.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
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
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Build Something
        <span className="text-blue-600 dark:text-blue-400"> Awesome</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A simple React JS website created using reusable React components and
        Tailwind CSS.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => {
            if (hidden === true) {
              setHidden(false);
            } else {
              setHidden(true);
            }
            console.log(hidden);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </button>

        <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
