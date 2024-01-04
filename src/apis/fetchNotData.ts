import axios from "axios";

async function fetchNotData(keywords: string[], pageNum: number) {
  const books = [];

  const keywordToSearch = keywords[0];
  const keywordToAvoid = keywords[1];

  try {
    const response = await axios.get(`/search/${keywordToSearch}/${pageNum}`);

    books.push(...response.data.books);
  } catch (error) {
    console.error("Error fetching book data:", error);
  }

  const filteredBooks = books.filter(
    book => !book.title.includes(keywordToAvoid),
  );

  return filteredBooks;
}

export default fetchNotData;
