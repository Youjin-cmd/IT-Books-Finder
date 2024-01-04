import axios from "axios";

async function fetchInitialData() {
  try {
    const response = await axios.get(`/new`);
    return response.data.books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchInitialData;
