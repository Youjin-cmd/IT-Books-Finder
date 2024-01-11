"use client";

import Image from "next/image";
import Link from "next/link";

import { IBook } from "@/types/type";

interface DataProps {
  data: IBook;
}

function Card({ data }: DataProps) {
  const blurDataURL =
    "data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Vg8AAhEBRyBq48EAAAAASUVORK5CYII=";

  return (
    <Link href={`/detail/${data.isbn13}`}>
      <Image
        src={data.image}
        alt={`book cover image: ${data.title}`}
        width={300}
        height={350}
        placeholder="blur"
        blurDataURL={blurDataURL}
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
