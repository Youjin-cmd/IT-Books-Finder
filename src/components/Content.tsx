import Card from "./Card";

function Content() {
  const mockData = [
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
  ];

  return (
    <div className="flex flex-wrap p-2 w-full h-full">
      {mockData.map(element => {
        return <Card key={crypto.randomUUID()} data={element} />;
      })}
    </div>
  );
}

export default Content;
