

import Image from "next/image";

async function getUser(userId) {
  const res = await fetch(
    `https://660e6f836ddfa2943b36c78e.mockapi.io/api/v2/users/${userId}`
  );
  const data = res.json();
  return data;
}


export default async function UserProfile({ params }) {
  
  const user = await getUser(params.userId);

  return (
    <div className="mt-24">
      <section className="text-center flex flex-col items-center">
        <h1 className="text-7xl">profile details</h1>
        <Image src={user.avatar} alt="user" width={200} height={200} />
        <p>userName: {user.name}</p>
        <p>createdAt: {user.createdAt}</p>
      </section>
    </div>
  );
}
