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
        <Link
          href="/"
          className={`${currentPath == "/" ? " tw-text-purple-600" : null}`}
        >
          Home
        </Link>
        <Link
          href="/users"
          className={`${
            currentPath.includes("/users") ? " tw-text-purple-600" : null
          }`}
        >
          Users
        </Link>
      </div>
      <div className="w-50 d-inline align-middle mt-1 ms-3 me-2">
        <Link href={"/api/auth/login"} className="bg-success p-2 rounded-lg">
          Log In
        </Link>
        <Link href="#" className="bg-warning p-2 mx-2">
          Sign Up
        </Link>
        <Link id="night" href="/">
          <Image
            className="align-middle"
            src="https://cdn-icons-png.flaticon.com/512/5261/5261906.png"
            width="30"
            height="30"
            alt="Night Mode icon"
          ></Image>
        </Link>
        {user && (
          <Link href="/users/me">
            <Image
              width={50}
              height={50}
              className="cursor-pointer h-16 w-16 m-2 border-2 border-black tw-rounded-full object-cover"
              src={user.picture}
              alt="current user"
            />
          </Link>
        )}
      </div>

      {/* <div className="">
        telefonistvis aseti ragac sheileba
            <div className="bg-gray-200 dark:bg-gray-800 absolute -right-full group-hover:right-0 top-0 w-60 h-screen transition-all duration-300 sm:delay-300">
              <UserInfo user={user} auth={auth} setUser={setUser} />
              userInfo must be here
            </div>
      </div> */}
    </nav>
  );
}
