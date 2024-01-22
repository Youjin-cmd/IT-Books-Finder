import fetchNewData from "@/apis/fetchNewData";
import fetchSearchData from "@/apis/fetchSearchData";

async function fetchBooksData(
  searchType: string,
  keywords: string[],
  pageNum: number,
) {
  switch (searchType) {
    case "new":
      return fetchNewData();

    case "default": {
      const searchParams = { keyword: keywords[0], pageNum };
      return fetchSearchData(searchParams);
    }

    case "or": {
      const books = [];

      for (const keyword of keywords) {
        const searchParams = { keyword, pageNum };
        const result = await fetchSearchData(searchParams);

        books.push(...result);
      }

      return books;
    }

    case "not": {
      const books = [];
      const searchParams = { keyword: keywords[0], pageNum };
      const keywordToAvoid = keywords[1].toLowerCase();

      const result = await fetchSearchData(searchParams);

      books.push(...result);

      const filteredBooks = books.filter(
        book => !book.title.toLowerCase().includes(keywordToAvoid),
      );

      return filteredBooks;
    }
  }
}

export default fetchBooksData;
