import { useState } from "react";

export default function FetchApi() {
  // 1. Siapkan state untuk menyimpan data dari API (awalnya array kosong)
  const [users, setUsers] = useState([]);

  // 2. Ambil data dari API satu kali saat halaman pertama kali dibuka

  // 3. Tampilkan data dengan .map() untuk setiap user
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Daftar <span className="text-blue-600">User</span>
      </h1>
      <p className="text-gray-600 text-sm mb-10 text-center">
        Data diambil dari jsonplaceholder.typicode.com/users
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
