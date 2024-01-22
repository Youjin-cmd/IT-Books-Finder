import { Metadata } from "next";

import fetchBookDetail from "@/apis/fetchBookDetail";

import Detail from "@/components/pages/Detail";
import Loading from "@/components/shared/Loading";

interface Props {
  params: { isbn: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isbn13 = params.isbn;

  try {
    const data = await fetchBookDetail(isbn13);

    return {
      metadataBase: new URL("http://localhost:3000"),
      title: data.title,
      description: data.desc,
      openGraph: {
        images: [
          {
            url: data.image,
            width: 800,
            height: 600,
          },
        ],
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
  const bookDetail = await fetchBookDetail(isbn13);

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
