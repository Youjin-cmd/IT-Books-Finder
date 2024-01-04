import Link from "next/link";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between w-full h-min-[30px] p-3 bg-mattBlack">
      <Link href={`/`}>
        <span className="text-white">📕 IT 북스 파인더</span>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Header;
