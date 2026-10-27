import { useEffect, useState } from "react";

function Navbar() {
  // 1. Ambil tema terakhir dari localStorage supaya tidak hilang saat pindah halaman
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  // 2. Setiap isDark berubah, pasang/lepas class "dark" di tag <html> lalu simpan pilihannya
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Kelas Front-End</h1>

        <div className="flex items-center gap-6">
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </a>

          <a href="/features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Features
          </a>

          <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            About
          </a>
          <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>
          <a href="/useref" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            useRef
          </a>
          <a href="/useeffect" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            useEffect
          </a>
          <a href="/fetchapi" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Fetch API
          </a>

          {/* 3. Tombol untuk mengganti tema */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
