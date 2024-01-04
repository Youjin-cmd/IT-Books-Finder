import { beforeEach, describe, expect, it } from "vitest";
import useBookStore from "../../store/book";
import { IBook } from "@/types/type";

const initialState = useBookStore.getState();

describe("useBookStore", () => {
  beforeEach(() => {
    useBookStore.setState(initialState);
  });

  it("should add books data well", () => {
    const { addBooks } = useBookStore.getState();
    const newBooks1: IBook[] = [
      {
        title: "Book 1",
        isbn13: "test",
        price: "test",
        subtitle: "test",
        image: "test",
        url: "test",
      },
    ];
    const newBooks2: IBook[] = [
      {
        title: "Book 2",
        isbn13: "test",
        price: "test",
        subtitle: "test",
        image: "test",
        url: "test",
      },
    ];

    addBooks(newBooks1);
    addBooks(newBooks2);

    const { books } = useBookStore.getState();

    expect(books).toEqual([...newBooks1, ...newBooks2]);
  });

  it("should renew Books data well", () => {
    const { renewBooks } = useBookStore.getState();
    const newBooks1: IBook[] = [
      {
        title: "Book 1",
        isbn13: "test",
        price: "test",
        subtitle: "test",
        image: "test",
        url: "test",
      },
    ];

    renewBooks(newBooks1);

    const newBooks2: IBook[] = [
      {
        title: "Book 1",
        isbn13: "test",
        price: "test",
        subtitle: "test",
        image: "test",
        url: "test",
      },
    ];

    renewBooks(newBooks2);

    const { books } = useBookStore.getState();

    expect(books).toEqual(newBooks2);
  });

  it("should update keywords well", () => {
    const { setKeywords } = useBookStore.getState();
    const newKeywords = ["A", "B"];

    setKeywords(newKeywords);

    const { keywords: updatedKeywords } = useBookStore.getState();

    expect(updatedKeywords).toBe(newKeywords);
  });

  it("should increase page number well", () => {
    const { increasePageNum } = useBookStore.getState();

    increasePageNum();
    increasePageNum();

    const { pageNum } = useBookStore.getState();

    expect(pageNum).toBe(3);
  });

  it("should reset data well", () => {
    const { resetData, increasePageNum, renewBooks } = useBookStore.getState();
    const newBooks: IBook[] = [
      {
        title: "Book 1",
        isbn13: "test",
        price: "test",
        subtitle: "test",
        image: "test",
        url: "test",
      },
    ];

    increasePageNum();
    renewBooks(newBooks);
    resetData();

    const { pageNum, books } = useBookStore.getState();

    expect(pageNum).toBe(1);
    expect(books.length).toBe(0);
  });

  it("should set searchType well", () => {
    const { setSearchType } = useBookStore.getState();

    setSearchType("test");

    const { searchType } = useBookStore.getState();

    expect(searchType).toBe("test");
  });
});
