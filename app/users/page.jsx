"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { USER_API } from "../page";

export default function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USER_API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="mt-24">
      <section>
        <h1 className="text-2xl">Online Users</h1>
        <div className="flex flex-col">
          {users.map((user, idx) => (
            <Link href={`/users/${user.id}`} key={idx}>
              {user.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
