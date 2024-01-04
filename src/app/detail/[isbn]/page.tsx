import type { Metadata } from "next";

import Detail from "@/components/pages/Detail";
import axios from "axios";

interface Props {
  params: { isbn: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isbn13 = params.isbn;

  try {
    const response = await axios.get(
      `https://api.itbook.store/1.0/books/${isbn13}`,
    );

    return {
      title: response.data.title,
      description: response.data.desc,
    };
  } catch (error) {
    console.error("error generating MetaData:", error);
    return {
      title: "Error",
      description: "Failed to fetch book detail.",
    };
  }
}

function DetailPage({ params }: Props) {
  return (
    <>
      <Detail params={params} />
    </>
  );
}

export default DetailPage;
