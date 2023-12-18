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
          <div className="w-full lg:w-auto pb-2 lg:pb-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                className="w-28 md:w-32 mx-auto"
                width={100}
                height={100}
                alt="logo"
                priority
              />
            </Link>
          </div>

          <Search />
          <Profile user={session?.user} />
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
