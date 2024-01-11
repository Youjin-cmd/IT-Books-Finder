import fetchDefaultData from "@/apis/fetchDefaultData";
import fetchInitialData from "@/apis/fetchInitialData";
import fetchNotData from "@/apis/fetchNotData";
import fetchOrData from "@/apis/fetchOrData";

async function fetchBooksData(
  searchType: string,
  keywords: string[],
  pageNum: number,
) {
  switch (searchType) {
    case "new":
      return await fetchInitialData();

    case "default":
      return await fetchDefaultData(keywords, pageNum);

    case "or":
      return await fetchOrData(keywords, pageNum);

    case "not":
      return await fetchNotData(keywords, pageNum);
  }
}

export default fetchBooksData;
