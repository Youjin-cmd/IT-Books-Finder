"use client";

import Button from "@/shared/Button";

function SearchBar() {
  const inputId = "book-search";

  return (
    <div>
      <label className="w-10 h-5 text-white" htmlFor={inputId}>
        Search
      </label>
      <input id={inputId} className="h-6 ml-3 p-1 rounded-sm" type="text" />
      <Button
        id="search-button"
        className="w-14 h-6 ml-3 rounded-sm bg-blue text-white text-sm"
        onClick={() => {}}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
