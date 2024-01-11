import Image from "next/image";
import Link from "next/link";

import { BLUR_DATA_URL_BOOKCOVER } from "../constant/constant";

import { IBook } from "@/types/type";

interface DataProps {
  data: IBook;
}

function Card({ data }: DataProps) {
  return (
    <Link href={`/detail/${data.isbn13}`}>
      <Image
        src={data.image}
        alt={`book cover image: ${data.title}`}
        width={300}
        height={350}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_BOOKCOVER}
      />
      <h3 className="text-xl">
        {data.title}
        {data.subtitle ? ":" : "."}
      </h3>
      <h4>{data.subtitle && data.subtitle + "."}</h4>
    </Link>
  );
}

export default Card;
