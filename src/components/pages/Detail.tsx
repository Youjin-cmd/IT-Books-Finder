import Image from "next/image";
import he from "he";

interface BookDetail {
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  rating: string;
  pages: string;
  publisher: string;
  price: string;
  desc: string;
}

type DetailProps = {
  bookDetail: BookDetail;
  isbn13: string;
};

const blurDataURL =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Vg8AAhEBRyBq48EAAAAASUVORK5CYII=+57cxlCTc/EIBM14FoNBqNRqPRaDQajeazWR3iP62K0ksnAAAAAElFTkSuQmCC";

function Detail({ isbn13, bookDetail }: DetailProps) {
  return (
    <div className="h-screen">
      <div className="flex justify-center my-10">
        <div className="relative flex w-2/6">
          <Image
            alt={`book cover image: ${bookDetail.title}`}
            src={bookDetail.image}
            width={300}
            height={350}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="flex flex-col justify-evenly w-4/6 pl-10">
          <div>
            <h1 className="mb-3 text-2xl font-bold">
              {bookDetail.title}
              {bookDetail.subtitle ? ": " + bookDetail.subtitle + "." : "."}
            </h1>
            <h2 className="mb-3">{bookDetail.authors}</h2>
            <span className="mb-3">
              {bookDetail.rating === "1" && "★☆☆☆☆"}
              {bookDetail.rating === "2" && "★★☆☆☆"}
              {bookDetail.rating === "3" && "★★★☆☆"}
              {bookDetail.rating === "4" && "★★★★☆"}
              {bookDetail.rating === "5" && "★★★★★"}
            </span>
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
        <p>{he.decode(bookDetail.desc)}</p>
      </div>
    </div>
  );
}

export default Detail;
