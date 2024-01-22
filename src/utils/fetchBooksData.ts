import fetchNewData from "@/apis/fetchNewData";
import fetchSearchData from "@/apis/fetchSearchData";

async function fetchBooksData(
  searchType: string,
  keywords: string[],
  pageNum: number,
) {
  switch (searchType) {
    case "new":
      return await fetchNewData();

    case "default":
      return await fetchSearchData(keywords[0], pageNum);

    case "or": {
      const books = [];

      for (const keyword of keywords) {
        const result = await fetchSearchData(keyword, pageNum);

        books.push(...result);
      }

      return books;
    }

    case "not": {
      const books = [];

      const keywordToSearch = keywords[0];
      const keywordToAvoid = keywords[1].toLowerCase();

      const result = await fetchSearchData(keywordToSearch, pageNum);

      books.push(...result);

      const filteredBooks = books.filter(
        book => !book.title.toLowerCase().includes(keywordToAvoid),
      );

      return filteredBooks;
    }
  }
}

export default fetchBooksData;
