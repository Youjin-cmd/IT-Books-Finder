import { create } from "zustand";
import { IBook } from "@/types/type";

interface BookStore {
  books: IBook[];
  keyword: string;
  addBooks: (newList: IBook[]) => void;
  renewBooks: (newList: IBook[]) => void;
  setKeyword: (newKeyword: string) => void;
}

const useBookStore = create<BookStore>(set => ({
  books: [],
  keyword: "next",
  addBooks: newList => {
    set(state => ({
      books: [...state.books, ...newList],
    }));
  },
  renewBooks: newList => set({ books: newList }),
  setKeyword: newKeyword => set({ keyword: newKeyword }),
}));

export default useBookStore;
