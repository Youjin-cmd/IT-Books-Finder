import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between w-full h-min-[30px] p-3 bg-mattBlack">
      <span className="text-white">search books web</span>
      <SearchBar />
    </div>
  );
}

export default Header;
