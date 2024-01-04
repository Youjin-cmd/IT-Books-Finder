import axios from "axios";

async function fetchBookDetail(isbn13: string) {
  const response = await axios.get(`/books/${isbn13}`);

  return response.data;
}

export default fetchBookDetail;
