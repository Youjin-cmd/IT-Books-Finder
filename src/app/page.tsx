import Content from "@/components/Content";
import Card from "@/components/Card";

export default function Home() {
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
    <>
      <Content>
        {mockData.map(element => {
          return <Card key={crypto.randomUUID()} data={element} />;
        })}
      </Content>
    </>
  );
}
