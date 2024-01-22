async function fetchNewData() {
  try {
    const response = await fetch(`https://api.itbook.store/1.0/new`);
    const parsedData = await response.json();

    return parsedData.books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchNewData;
