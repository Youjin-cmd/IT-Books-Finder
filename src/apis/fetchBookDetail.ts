import axios from "axios";

async function fetchBookDetail(isbn13: string) {
  try {
    const response = await axios.get(`/books/${isbn13}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchBookDetail;
