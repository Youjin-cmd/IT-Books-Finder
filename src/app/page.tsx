"use client";
import { useEffect, useState } from "react";

import Content from "@/components/Content";
import Card from "@/components/Card";

import fetchITBook from "../utils/fetchITBook";

import { IBook } from "@/types/type";

export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await getBooksList("next", 1);
        setBooks(responseData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }

    fetchData();
  }, []);

  async function getBooksList(keyword: string, pageNum: number) {
    const response = await fetchITBook("GET", `/search/${keyword}/${pageNum}`);

    return response.data.books;
  }

  return (
    <>
      <Content>
        {books.map(book => {
          return <Card key={crypto.randomUUID()} data={book} />;
        })}
      </Content>
      <div>hey</div>
    </>
  );
}
