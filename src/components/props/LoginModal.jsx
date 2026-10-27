function LoginModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl mx-4">
        {/* Close Button */}
        <button className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          &times;
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Login</h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600 dark:text-gray-400">Remember me</span>
            </label>

            <button type="button" className="text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <button className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
