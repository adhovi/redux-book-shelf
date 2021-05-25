import React from "react";
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  addToReadingList,
  markedAsFinished,
  removeFromReadingList,
} from "../../redux/actions/bookActions";
import styles from "./book.module.css";
const SingleBook = ({ book, button }) => {
  const dispatch = useDispatch();
  const { title, author, coverImageUrl, synopsis } = book;
  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {button.minus && (
          <HiMinusCircle
            onClick={() => dispatch(removeFromReadingList(book))}
            title="Remove from list"
            className={styles.minus_icon}
          />
        )}
        {button.plus && (
          <HiPlusCircle
            onClick={() => dispatch(addToReadingList(book))}
            title="Add to Reading"
            className={styles.plus_icon}
          />
        )}
        {button.check && (
          <HiCheckCircle
            onClick={() => dispatch(markedAsFinished(book))}
            title="Mark as Finish"
            className={styles.check_icon}
          />
        )}
      </div>
    </div>
  );
};

export default SingleBook;
