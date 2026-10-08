import { useEffect, useState } from "react";

export default function FetchApi() {
  // 1. Siapkan state untuk menyimpan data dari API (awalnya array kosong)
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [weather, setWeather] = useState({});

  // 2. Ambil data dari API satu kali saat halaman pertama kali dibuka
  useEffect(() => {
    async function getData() {
      const usersURL = "https://jsonplaceholder.typicode.com/users";
      const postsURL = "https://jsonplaceholder.typicode.com/posts";
      const weatherURL =
        "https://api.open-meteo.com/v1/forecast?latitude=1.4225&longitude=124.9772&current=temperature_2m,relative_humidity_2m&timezone=Asia%2FSingapore";

      const [usersRes, postsRes, weatherRes] = await Promise.all([
        fetch(usersURL),
        fetch(postsURL),
        fetch(weatherURL),
      ]);

      const usersData = await usersRes.json();
      const postsData = await postsRes.json();
      const weatherData = await weatherRes.json();

      setUsers(usersData);
      setPosts(postsData);
      setWeather(weatherData);
    }
    getData();
  }, []);

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
        <div
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">Airmadidi Bawah</h2>
            <p className="text-sm text-gray-600">{weather.current?.temperature_2m}°C</p>
            <p className="text-sm text-gray-600">{weather.current?.relative_humidity_2m}%</p>
          </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.address.suite}</p>
          </div>
        ))}
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">{post.title}</h2>
            {/* <p className="text-sm text-gray-600">{post.title}</p> */}
            <p className="text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
