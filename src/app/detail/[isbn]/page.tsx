import { Metadata } from "next";

import Loading from "@/shared/Loading";
import Detail from "@/components/pages/Detail";
interface Props {
  params: { isbn: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isbn13 = params.isbn;

  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/books/${isbn13}`,
    );
    const data = await response.json();

    return {
      openGraph: {
        title: data.title,
        description: data.desc,
        siteName: "IT 북스 파인더",
        images: [
          {
            url: data.image,
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  } catch (error) {
    console.error("error generating MetaData:", error);
    return {
      title: "Error",
      description: "Failed to fetch book detail.",
    };
  }
}

async function DetailPage({ params }: Props) {
  const isbn13 = params.isbn;
  const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
  const bookDetail = await response.json();

  if (!bookDetail?.title) {
    return (
      <div className="flex justify-center items-center left-0 right-0 top-0 bottom-0">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Detail isbn13={isbn13} bookDetail={bookDetail} />
    </>
  );
}

export default DetailPage;
