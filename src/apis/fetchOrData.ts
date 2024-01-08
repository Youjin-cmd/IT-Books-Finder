async function fetchOrData(keywords: string[], pageNum: number) {
  const books = [];

  for (const keyword of keywords) {
    try {
      const response = await fetch(
        `https://api.itbook.store/1.0/search/${keyword}/${pageNum}`,
      );
      const parsedData = await response.json();

      books.push(...parsedData.books);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }

  return books;
}

export default fetchOrData;
