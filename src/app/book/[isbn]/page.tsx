"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

function BookDetails() {
  const pathname = usePathname().split("/");

  const data = {
    title: "MongoDB in Action, 2nd Edition",
    subtitle: "Covers MongoDB version 3.0",
    authors:
      "Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett, Tim Hawkins",
    publisher: "Manning",
    pages: "480",
    rating: "4",
    desc: "MongoDB in Action, 2nd Edition is a completely revised and updated version. It introduces MongoDB 3.0 and the document-oriented database model. This perfectly paced book gives you both the big picture you'll need as a developer and enough low-level detail to satisfy system engineers.MongoDB in ...",
    price: "$19.99",
    image: "https://itbook.store/img/books/9781617291609.png",
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center my-10">
        <div className="relative flex w-2/6">
          <Image
            alt={`book cover image: ${data.title}`}
            src={data.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "350px" }}
          />
        </div>
        <div className="flex flex-col justify-evenly w-4/6 pl-10">
          <div>
            <h1 className="mb-3 text-2xl">
              {data.title}: {data.subtitle}.
            </h1>
            <h2 className="mb-3">{data.authors}</h2>
            <span className="mb-3">raiting: {data.rating}</span>
          </div>
          <div className="flex justify-end">
            <span className="text-3xl">{data.price}</span>
          </div>
        </div>
      </div>
      <div className="h-80 w-full py-5 border-t border-grey">
        <div className="mb-10">
          <h3 className="mb-2 text-lg font-bold text-mattBlack">기본 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span>ISBN: </span>
              <span>{pathname[2]}</span>
            </div>
            <div>
              <span>페이지수: </span>
              <span>{data.pages} pp.</span>
            </div>
            <div>
              <span>출판사: </span>
              <span>{data.publisher}</span>
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-bold text-mattBlack">책소개</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default BookDetails;
