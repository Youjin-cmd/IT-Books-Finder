"use client";
import { useState } from "react";

import fetchITBook from "@/utils/fetchITBook";
import useBookStore from "@/store/book";

import Button from "@/shared/Button";

function SearchBar() {
  const { renewBooks, setKeyword } = useBookStore();
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleChangeSearchBar(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchBarValue(event.target.value);
    setKeyword(event.target.value);
  }

  async function fetchData(pageNum: number) {
    try {
      const responseData = await fetchITBook(
        "GET",
        `/search/${searchBarValue}/${pageNum}`,
      );
      renewBooks(responseData.data.books);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
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
        onClick={() => fetchData(1)}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
