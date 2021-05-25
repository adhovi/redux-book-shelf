import React from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book/Book";
// import books from '../fakeData/books.json'
import PageLayout from "../components/PageLayout/PageLayout";
const Discover = () => {
  const books = useSelector((state) => state.books.discoverList);
  const button = {
    plus: true,
    minus: false,
    check: false,
  };
  return (
    <PageLayout>
      {books?.map((book) => (
        <Book key={book.id} book={book} button={button} />
      ))}
    </PageLayout>
  );
};

export default Discover;
