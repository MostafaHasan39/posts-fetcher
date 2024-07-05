import Link from "next/link";
const Nav = () => {
  return (
    <nav className="px-12 py-3  bg-gray-300 top-0 right-0 left-0 fixed z-10">
      <ul className="list-none flex flex-row gap-4">
        <li className="font-bold">
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
