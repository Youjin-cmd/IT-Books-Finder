"use client";

import useBookStore from "@/store/book";

function Logo() {
  const { resetAllData } = useBookStore();

  function handleLinkClick() {
    resetAllData();
  }

  return (
    <span className="text-white" onClick={handleLinkClick}>
      📕 IT 북스 파인더
    </span>
  );
}

export default Logo;
