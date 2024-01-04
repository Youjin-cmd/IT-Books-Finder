function processKeyword(keyword: string) {
  if (keyword.includes("|")) {
    const processedkeyword = keyword.split("|").map(element => {
      return element.trim();
    });

    if (processedkeyword.length > 2) {
      return { searchType: "warning", keywords: [] };
    }

    return { searchType: "or", keywords: processedkeyword };
  }

  if (keyword.includes("-")) {
    const processedkeyword = keyword.split("-").map(element => {
      return element.trim();
    });

    if (processedkeyword.length > 2) {
      return { searchType: "warning", keywords: [] };
    }

    return { searchType: "not", keywords: processedkeyword };
  }

  return { searchType: "default", keywords: [keyword.trim()] };
}

export default processKeyword;
