"use client";

import Image from "next/image";
import Link from "next/link";

interface IData {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

interface DataProps {
  data: IData;
}

function Card({ data }: DataProps) {
  const urlData = data.url.split("/");

  return (
    <div className="w-1/3 h-100 p-4 text-base" onClick={() => {}}>
      <Link href={`/book/${urlData[4]}`}>
        <Image
          src={data.image}
          alt={`book cover image: ${data.title}`}
          width={300}
          height={300}
          priority
        />
        <h3 className="text-xl">{data.title}</h3>
        <h4>{data.subtitle}</h4>
      </Link>
    </div>
  );
}

export default Card;
