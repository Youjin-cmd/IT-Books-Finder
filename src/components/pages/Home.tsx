"use client";
import { useEffect, useRef, useState } from "react";

import useBookStore from "@/store/book";

import fetchBooksData from "@/utils/fetchBooksData";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

import Content from "@/components/Content";
import Card from "@/components/Card";
import Loading from "@/shared/Loading";

function Home() {
  const { books, addBooks, keywords, searchType, pageNum, increasePageNum } =
    useBookStore();
  const [isLoading, setIsLoading] = useState("");
  const lastElementRef = useRef<HTMLDivElement>(null);
  const { observe } = useIntersectionObserver(() => {
    increasePageNum();
  });

  useEffect(() => {
    if (lastElementRef.current && observe) {
      observe(lastElementRef.current);
    }
  }, [books.length]);

  useEffect(() => {
    getBooks();
  }, [pageNum, keywords]);

  if (isLoading === "new") {
    return (
      <div className="flex justify-center items-center left-0 right-0 top-0 bottom-0">
        <Loading />
      </div>
    );
  }

  async function getBooks() {
    if (pageNum === 1) {
      setIsLoading("new");
      const books = await fetchBooksData(searchType, keywords, pageNum);
      addBooks(books);
      setIsLoading("");

      return;
    }

    if (pageNum > 1 && searchType !== "new") {
      setIsLoading("more");
      const books = await fetchBooksData(searchType, keywords, pageNum);
      addBooks(books);
      setIsLoading("");
    }
  }

  return (
    <Content>
      {books.map((book, index) => {
        return (
          <div
            key={crypto.randomUUID()}
            id={`book-${index}`}
            className="w-1/3 h-100 p-4 text-base"
            ref={index === books.length - 1 ? lastElementRef : undefined}
          >
            <Card data={book} />
          </div>
        );
      })}
      {isLoading === "more" && (
        <div
          id={`loading`}
          className="flex justify-center items-center w-1/3 h-100 p-4 text-base"
        >
          <Loading />
        </div>
      )}
    </Content>
  );
}

export default Home;
