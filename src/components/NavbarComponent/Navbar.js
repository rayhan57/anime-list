import Link from "next/link";
import React from "react";
import Image from "next/image";
import Search from "./Search";
import Profile from "./Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const NavbarComponent = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <nav className="bg-slate-100 border shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
          <Link href="/">
            <Image src="/logo.svg" width={120} height={100} />
          </Link>

          <Search />
          <Profile user={session?.user} />
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
