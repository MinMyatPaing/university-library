import BookList from "@/components/home/BookList";
import BookOverview from "@/components/home/BookOverview";
import { sampleBooks } from "../../constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
