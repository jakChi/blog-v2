export default function Navbar () {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 fixed top-0 left-0 w-screen h-16 sm:h-20 flex justify-between">
      <header className="px-5 py-4">
        <a
          href="https://github.com/jakChi/blog-v2"
          rel="noreferrer"
          target="_blank"
          className="text-xl sm:text-5xl font-bold"
        >
          NIKUSHA BLOG
        </a>
      </header>
      <div className="group">
        <img
          className="w-20 h-20 mx-2 cursor-pointer object-cover rounded-full"
          src={
            "https://celebmafia.com/wp-content/uploads/2021/08/sydney-sweeney-photoshoot-august-2021-9.jpg"
          }
          alt="პროფილის ფოტო"
        />
        <div className="bg-gray-200 dark:bg-gray-800 absolute -right-full group-hover:right-0 top-0 w-60 h-screen transition-all duration-300 sm:delay-300">
          {/* <UserInfo user={user} auth={auth} setUser={setUser} /> */}
          userInfo must be here
        </div>
      </div>
    </nav>
  );
}