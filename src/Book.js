import React from "react";

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt="Book is life" />
      <h1>
        <a href="#">{title} </a>
      </h1>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
