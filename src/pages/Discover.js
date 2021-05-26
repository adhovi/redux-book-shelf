import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
// import books from '../fakeData/books.json'
import PageLayout from "../components/PageLayout/PageLayout";
import { loadBooks, loadReadingList } from "../redux/actions/bookActions";
const Discover = () => {
  const books = useSelector((state) => state.books.discoverList);
  const button = {
    plus: true,
    minus: false,
    check: false,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadReadingList());
  }, [dispatch]);

  return (
    <PageLayout>
      {books?.map((book) => (
        <Book key={book._id} book={book} button={button} />
      ))}
    </PageLayout>
  );
};

export default Discover;
