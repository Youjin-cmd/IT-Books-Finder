import Link from "next/link";

import SearchBar from "./SearchBar";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-between w-full h-min-[30px] p-3 bg-mattBlack">
      <Link href={`/`}>
        <Logo />
      </Link>
      <SearchBar />
    </div>
  );
}

export default Header;
