import axios from "axios";

function fetchITBook(method: string, url: string) {
  const response = axios({
    method,
    url,
  });

  return response;
}

export default fetchITBook;
