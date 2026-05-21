import React from "react";

function Showdata({users}){



    return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">
        User List
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">
              {user.name}
            </h2>

            <p className="text-white mb-2">
              📧 {user.email}
            </p>

            <p className="text-cyan-200 mb-2">
              📱 {user.phone}
            </p>

            <p className="text-green-200">
              🌐 {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;