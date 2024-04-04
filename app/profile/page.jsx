import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="mt-24">
      <p>profile details</p>
      <Image
        src="https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg"
        width={500}
        height={500}
        alt="profile"
      />
    </div>
  );
}
