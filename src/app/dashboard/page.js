import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import Image from "next/image";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const user = session.user;

  return (
    <div className="container mt-4 mx-auto">
      <h1 className="text-2xl font-bold">Dashboard page</h1>
      <div className="flex flex-wrap gap-4 md:gap-8 mt-3">
        <Image
          src={user.image}
          alt="user profile"
          width={300}
          height={300}
          className="w-40 lg:w-60 rounded-full border mx-auto md:mx-0"
        />
        <div>
          <span className="text-sm text-gray-400">Nama</span>
          <h2 className="-mt-1 mb-2">{user.name}</h2>

          <span className="text-sm text-gray-400">Email</span>
          <h2 className="-mt-1 mb-3">{user.email}</h2>

          <Link
            href="/dashboard/favorite"
            className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md"
          >
            Favorite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
