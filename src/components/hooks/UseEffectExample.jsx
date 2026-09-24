import { useEffect, useState } from "react";

// Contoh 1: useEffect yang jalan setiap kali komponen render
// (tanpa array dependency)
function EveryRenderDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Execute every render");
  });
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h3 className="mb-1 font-semibold text-gray-900">
        1. Tanpa dependency array
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Efek ini jalan setiap kali komponen render (cek console tiap klik).
      </p>
      <p className="mb-4 text-3xl font-bold text-blue-600">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Tambah
      </button>
    </div>
  );
}

// Contoh 2: useEffect dengan dependency array
// hanya jalan sekali saat komponen pertama kali muncul ([] = kosong),
// jalan sekali saat komponen pertama kali muncul dan = saat salah satu nilai di dalam array berubah ([array] = terisi)
function DependencyDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Execute only on mount (only once)");
  }, []);
  useEffect(() => {
    console.log("Execute only when text changed:" + text);
  }, [text]);
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h3 className="mb-1 font-semibold text-gray-900">
        2. Dengan dependency array
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Buka console: ketik di input (tidak memicu efek), lalu klik tombol
        (memicu efek karena count berubah).
      </p>

      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik di sini (tidak memicu efek)"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Tambah count ({count})
        </button>
      </div>
    </div>
  );
}

export default function UseEffectExample() {
  return (
    <div className="space-y-6">
      <EveryRenderDemo />
      <DependencyDemo />
    </div>
  );
}
