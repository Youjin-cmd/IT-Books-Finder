"use client";
import { useEffect, useRef, useState } from "react";
import { IBook } from "@/types/type";

import fetchITBook from "../utils/fetchITBook";
import useIntersectionObserver from "../utils/useIntersectionObserver";

import Content from "@/components/Content";
import Card from "@/components/Card";

export default function Home() {
  const lastElementRef = useRef<HTMLDivElement>(null);
  const [books, setBooks] = useState<IBook[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const { observe } = useIntersectionObserver(() => {
    setPageNum(page => page + 1);
  });

  useEffect(() => {
    if (lastElementRef.current) {
      observe(lastElementRef.current);
    }
  }, [books]);

  useEffect(() => {
    fetchData(pageNum);
  }, [pageNum]);

  async function fetchData(pageNum: number) {
    try {
      const responseData = await getBooksList("next", pageNum);
      setBooks(prevBooks => [...prevBooks, ...responseData]);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }

  async function getBooksList(keyword: string, pageNum: number) {
    const response = await fetchITBook("GET", `/search/${keyword}/${pageNum}`);

    return response.data.books;
  }

  return (
    <>
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
      </Content>
    </>
  );
}
