"use client";
import { useEffect, useState } from "react";

function Loading() {
  const [loadingText, setLoadingText] = useState(".");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLoadingText(prevText => (prevText === "....." ? "." : prevText + "."));
    }, 200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return <div className="animate-pulse text-2xl">{loadingText}</div>;
}

export default Loading;
