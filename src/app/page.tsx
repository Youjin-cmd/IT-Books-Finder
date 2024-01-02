import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div className="flex flex-col m-auto pb-10 max-w-4xl h-auto">
      <Header />
      <Content />
    </div>
  );
}
