import { create } from "zustand";
import { IBook } from "@/types/type";

interface BookStore {
  books: IBook[];
  keywords: string[];
  pageNum: number;
  searchType: string;
  addBooks: (newList: IBook[]) => void;
  renewBooks: (newList: IBook[]) => void;
  setKeywords: (newKeywords: string[]) => void;
  increasePageNum: () => void;
  resetData: () => void;
  setSearchType: (newType: string) => void;
}

const useBookStore = create<BookStore>(set => ({
  books: [],
  keywords: [""],
  pageNum: 1,
  searchType: "none",
  addBooks: newList => {
    set(state => ({
      books: [...state.books, ...newList],
    }));
  },
  renewBooks: newList => set({ books: newList }),
  setKeywords: newKeywords => set({ keywords: newKeywords }),
  increasePageNum: () => {
    set(state => ({
      pageNum: state.pageNum + 1,
    }));
  },
  resetData: () => set({ pageNum: 1, books: [] }),
  setSearchType: newType => set({ searchType: newType }),
}));

export default useBookStore;
