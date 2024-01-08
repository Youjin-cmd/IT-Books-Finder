async function fetchNotData(keywords: string[], pageNum: number) {
  const books = [];

  const keywordToSearch = keywords[0];
  const keywordToAvoid = keywords[1].toLowerCase();

  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${keywordToSearch}/${pageNum}`,
    );
    const parsedData = await response.json();

    books.push(...parsedData.books);
  } catch (error) {
    console.error("Error fetching book data:", error);
  }

  const filteredBooks = books.filter(
    book => !book.title.toLowerCase().includes(keywordToAvoid),
  );

  return filteredBooks;
}

export default fetchNotData;
