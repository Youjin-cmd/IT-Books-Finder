import { create } from "zustand";
import { IBook } from "@/types/type";

interface BookStore {
  books: IBook[];
  keywords: string[];
  pageNum: number;
  searchType: string;
  addBooks: (newList: IBook[]) => void;
  setKeywords: (newKeywords: string[]) => void;
  increasePageNum: () => void;
  resetPageData: () => void;
  setSearchType: (newType: string) => void;
  resetAllData: () => void;
}

const initialState = {
  books: [],
  keywords: [""],
  pageNum: 1,
  searchType: "new",
};

const useBookStore = create<BookStore>(set => ({
  ...initialState,
  addBooks: newList => {
    set(state => ({
      books: [...state.books, ...newList],
    }));
  },
  setKeywords: newKeywords => set({ keywords: newKeywords }),
  increasePageNum: () => {
    set(state => ({
      pageNum: state.pageNum + 1,
    }));
  },
  setSearchType: newType => set({ searchType: newType }),
  resetPageData: () => set({ pageNum: 1, books: [] }),
  resetAllData: () => set(initialState),
}));

export default useBookStore;
