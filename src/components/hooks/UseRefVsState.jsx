import { useRef, useState } from "react";

// Counter pakai useState
// Setiap tombol diklik, count berubah DAN komponen render ulang,
// sehingga angka di layar langsung ikut berubah.
function CounterWithState() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">useState</h3>
      <p className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Tambah
      </button>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Angka di layar langsung berubah setiap tombol diklik.
      </p>
    </div>
  );
}

// Counter pakai useRef
// Setiap tombol diklik, count.current berubah TAPI komponen TIDAK render ulang,
// sehingga angka di layar tidak ikut berubah (walau nilainya sudah berubah).
function CounterWithRef() {
  const count = useRef(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    count.current = count.current + 1;
    setCount2((prevCount2) => prevCount2 + 1);
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">useRef</h3>
      <p className="mb-4 text-3xl font-bold text-amber-600 dark:text-amber-400">{count.current}</p>
      <button
        onClick={handleClick}
        className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
      >
        Tambah
      </button>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Nilainya berubah (cek console), tapi angka di layar tidak ikut update
        karena mengubah ref.current tidak memicu re-render.
      </p>
    </div>
  );
}

export default function UseRefVsState() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <CounterWithState />
      <CounterWithRef />
    </div>
  );
}
