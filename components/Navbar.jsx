"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const currentPath = usePathname();
  const { user } = useUser();

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="">
        <header className="">
          <Link href="/" rel="noreferrer" className="">
            BLOG
          </Link>
        </header>
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/users" className="">
          Users
        </Link>
      </div>
      <div>
        <Link href={"/api/auth/login"}>login</Link>
      </div>
      <div className="">
       {user && <Link href="/users/me">
          <Image
            width={50}
            height={50}
            className="cursor-pointer h-16 w-16 m-2 border-2 border-black rounded-full object-cover"
            src={user.picture}
            alt="current user"
          />
        </Link>}

        {/* telefonistvis aseti ragac sheileba
            <div className="bg-gray-200 dark:bg-gray-800 absolute -right-full group-hover:right-0 top-0 w-60 h-screen transition-all duration-300 sm:delay-300">
              <UserInfo user={user} auth={auth} setUser={setUser} />
              userInfo must be here
            </div> */}
      </div>
    </nav>
  );
}
