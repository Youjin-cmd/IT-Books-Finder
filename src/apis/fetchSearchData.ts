interface SearchParams {
  keyword: string;
  pageNum: number;
}

async function fetchSearchData(searchParams: SearchParams) {
  const { keyword, pageNum } = searchParams;

  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${keyword}/${pageNum}`,
    );
    const parsedData = await response.json();

    return parsedData.books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchSearchData;
