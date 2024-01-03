"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";

import fetchITBook from "@/utils/fetchITBook";

function BookDetails() {
  const isbn13 = usePathname().split("/")[2];

  const [bookDetail, setBookDetail] = useState({
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "/",
    url: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await getBookDetail(isbn13);
        setBookDetail(responseData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }

    fetchData();
  }, []);

  async function getBookDetail(isbn13: string) {
    const response = await fetchITBook("GET", `/books/${isbn13}`);

    return response.data;
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center my-10">
        <div className="relative flex w-2/6">
          <Image
            alt={`book cover image: ${bookDetail.title}`}
            src={bookDetail.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "350px" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-evenly w-4/6 pl-10">
          <div>
            <h1 className="mb-3 text-2xl font-bold">
              {bookDetail.title}
              {bookDetail.subtitle ? ": " + bookDetail.subtitle + "." : "."}
            </h1>
            <h2 className="mb-3">{bookDetail.authors}</h2>
            <span className="mb-3">rating: {bookDetail.rating}</span>
          </div>
          <div className="flex justify-end">
            <span className="text-3xl">{bookDetail.price}</span>
          </div>
        </div>
      </div>
      <div className="h-80 w-full py-5 border-t border-grey">
        <div className="mb-10">
          <h3 className="mb-2 text-lg font-bold text-mattBlack">기본 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span>ISBN: </span>
              <span>{isbn13}</span>
            </div>
            <div>
              <span>페이지수: </span>
              <span>{bookDetail.pages} pp.</span>
            </div>
            <div>
              <span>출판사: </span>
              <span>{bookDetail.publisher}</span>
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-bold text-mattBlack">책소개</h3>
        <p>{bookDetail.desc}</p>
      </div>
    </div>
  );
}

export default BookDetails;
