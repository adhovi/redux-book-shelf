import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const ReadingList = () => {
  const books = useSelector((state) => state.books.readingList);
  const button = {
    plus: false,
    minus: true,
    check: true,
  };
  return (
    <PageLayout>
      {books?.length ? (
        books?.map((book) => <Book key={book.id} book={book} button={button} />)
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;
