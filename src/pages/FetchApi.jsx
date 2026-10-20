import { useEffect, useState } from "react";

export default function FetchApi() {
  // 1. Siapkan state untuk menyimpan data dari API (awalnya array kosong)
  const [users, setUsers] = useState([]);
  const [weather, setWeather] = useState({});
  const [gempa, setGempa] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 2. Ambil data dari API satu kali saat halaman pertama kali dibuka
  useEffect(() => {
    async function getData() {
      const gempaURL = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";
      const usersURL = "http://localhost:3001/users";
      const weatherURL =
        "https://api.open-meteo.com/v1/forecast?latitude=1.4225&longitude=124.9772&current=temperature_2m,relative_humidity_2m&timezone=Asia%2FSingapore";

      const [gempaRes, usersRes, weatherRes] = await Promise.all([
        fetch(gempaURL),
        fetch(usersURL),
        fetch(weatherURL),
      ]);

      console.log(gempaRes);

      // const usersData = await usersRes.json();
      const gempaData = await gempaRes.json();
      console.log(gempaData);

      const usersData = await usersRes.json();
      const weatherData = await weatherRes.json();

      setGempa(gempaData);
      setUsers(usersData);
      setWeather(weatherData);
    }
    getData();
  }, []);

  async function postData(e) {
    e.preventDefault();
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
  }

  // 3. Tampilkan data dengan .map() untuk setiap user
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Daftar <span className="text-blue-600">User</span>
      </h1>
      <p className="text-gray-600 text-sm mb-10 text-center">
        Data diambil dari jsonplaceholder.typicode.com/users
      </p>

      <form
        onSubmit={postData}
        className="mb-4 flex flex-col gap-2 sm:flex-row"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ketik name user..."
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ketik email user..."
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Kirim
        </button>
      </form>

      {/* {user && (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="font-semibold text-gray-900">Pengguna</h2>
          <p className="text-sm text-gray-600">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      )} */}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="font-semibold text-gray-900">Gempa Terkini</h2>
          <p className="text-sm text-gray-600">
            {gempa.Infogempa?.gempa?.Tanggal}
          </p>
          <p className="text-sm text-gray-600">{gempa.Infogempa?.gempa?.Jam}</p>
          <p className="text-sm text-gray-600">
            {gempa.Infogempa?.gempa?.Wilayah}
          </p>
          <p className="text-sm text-gray-600">
            {gempa.Infogempa?.gempa?.Magnitude}
          </p>
          <p className="text-sm text-gray-600">
            {gempa.Infogempa?.gempa?.Kedalaman}
          </p>
          <img
            src={`https://static.bmkg.go.id/${gempa.Infogempa?.gempa?.Shakemap}`}
          />
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="font-semibold text-gray-900">Airmadidi Bawah</h2>
          <p className="text-sm text-gray-600">
            {weather.current?.temperature_2m}°C
          </p>
          <p className="text-sm text-gray-600">
            {weather.current?.relative_humidity_2m}%
          </p>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
