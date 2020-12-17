import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const Booklist = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
