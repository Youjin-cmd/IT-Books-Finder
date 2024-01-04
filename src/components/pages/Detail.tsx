"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IBookDetail } from "@/types/type";

import fetchBookDetail from "@/apis/fetchBookDetail";

import Loading from "@/shared/Loading";

type DetailProps = {
  params: { isbn: string };
};

function Detail({ params }: DetailProps) {
  const [bookDetail, setBookDetail] = useState<IBookDetail | undefined>();
  const isbn13 = params.isbn;

  useEffect(() => {
    async function getBookDetail() {
      try {
        const response = await fetchBookDetail(isbn13);
        setBookDetail(response);
      } catch (error) {
        console.error("Error fetching book detail:", error);
      }
    }

    getBookDetail();
  }, []);

  if (!bookDetail?.title) {
    return (
      <div className="flex justify-center items-center left-0 right-0 top-0 bottom-0">
        <Loading />
      </div>
    );
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

export default Detail;
