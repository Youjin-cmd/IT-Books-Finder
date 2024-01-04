"use client";
import { useEffect, useRef } from "react";

import useBookStore from "@/store/book";

import fetchDefaultData from "@/apis/fetchDefaultData";
import fetchOrData from "@/apis/fetchOrData";
import fetchNotData from "@/apis/fetchNotData";
import fetchInitialData from "@/apis/fetchInitialData";
import useIntersectionObserver from "../utils/useIntersectionObserver";

import Content from "@/components/Content";
import Card from "@/components/Card";
import Loading from "@/shared/Loading";

export default function Home() {
  const { books, addBooks, keywords, searchType, pageNum, increasePageNum } =
    useBookStore();
  const lastElementRef = useRef<HTMLDivElement>(null);
  const { observe } = useIntersectionObserver(() => {
    increasePageNum();
  });

  useEffect(() => {
    if (lastElementRef.current && observe && searchType !== "none") {
      observe(lastElementRef.current);
    }
  }, [books]);

  useEffect(() => {
    getBooks();
  }, [pageNum, searchType]);

  async function getBooks() {
    let data;

    if (searchType === "none") {
      data = await fetchInitialData();
      addBooks(data);
      return;
    }

    switch (searchType) {
      case "warning":
        alert("키워드는 두개까지 입력 가능합니다.");
        break;

      case "default":
        data = await fetchDefaultData(keywords, pageNum);
        addBooks(data);
        break;

      case "or":
        data = await fetchOrData(keywords, pageNum);
        addBooks(data);
        break;

      case "not":
        data = await fetchNotData(keywords, pageNum);
        addBooks(data);
    }
  }

  if (books.length < 1) {
    return (
      <div className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0">
        <Loading />
      </div>
    );
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
        {searchType !== "none" && (
          <div
            key={crypto.randomUUID()}
            id={`loading`}
            className="flex justify-center items-center w-1/3 h-100 p-4 text-base"
          >
            <Loading />
          </div>
        )}
      </Content>
    </>
  );
}
