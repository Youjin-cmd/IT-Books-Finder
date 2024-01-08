async function fetchDefaultData(keyword: string[], pageNum: number) {
  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${keyword[0]}/${pageNum}`,
    );
    const parsedData = await response.json();

    return parsedData.books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchDefaultData;
