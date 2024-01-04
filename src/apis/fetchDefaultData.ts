import axios from "axios";

async function fetchDefaultData(keyword: string[], pageNum: number) {
  try {
    const response = await axios.get(`/search/${keyword[0]}/${pageNum}`);
    return response.data.books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchDefaultData;
