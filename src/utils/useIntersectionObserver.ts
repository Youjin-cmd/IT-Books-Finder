function useIntersectionObserver(callback: () => void) {
  const isSupported =
    typeof window !== "undefined" && "IntersectionObserver" in window;

  if (!isSupported) {
    return { undefined };
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    },
    { threshold: 0.1 },
  );

  const observe = (element: HTMLDivElement) => {
    if (observer) {
      observer.observe(element);
    }
  };

  return { observe };
}

export default useIntersectionObserver;
