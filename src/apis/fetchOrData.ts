import axios from "axios";

async function fetchOrData(keywords: string[], pageNum: number) {
  const books = [];

  for (const keyword of keywords) {
    try {
      const response = await axios.get(`/search/${keyword}/${pageNum}`);

      books.push(...response.data.books);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }

  return books;
}

export default fetchOrData;
