async function fetchBookDetail(isbn13: string) {
  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/books/${isbn13}`,
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching book data:", error);
    throw error;
  }
}

export default fetchBookDetail;
