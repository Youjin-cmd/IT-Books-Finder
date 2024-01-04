"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import useBookStore from "@/store/book";
import processKeyword from "@/utils/processKeyword";

import Button from "@/shared/Button";

function SearchBar() {
  const router = useRouter();
  const { setKeywords, setSearchType, resetData } = useBookStore();
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleChangeSearchBar(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchBarValue(event.target.value);
  }

  async function handleClickSearch() {
    if (!searchBarValue) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const result = processKeyword(searchBarValue);

    if (result.searchType === "warning") {
      alert("키워드는 두개까지 입력 가능합니다.");
    }

    setKeywords(result.keywords);
    setSearchType(result.searchType);
    resetData();
    router.push("/");
  }

  return (
    <div>
      <label className="w-10 h-5 text-white" htmlFor={"book-search"}>
        Search
      </label>
      <input
        id={"book-search"}
        className="h-6 ml-3 p-1 rounded-sm"
        type="text"
        onChange={event => handleChangeSearchBar(event)}
      />
      <Button
        id="search-button"
        className="w-14 h-6 ml-3 rounded-sm bg-blue text-white text-sm"
        onClick={() => handleClickSearch()}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
