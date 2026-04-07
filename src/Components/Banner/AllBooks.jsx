import React, { use } from "react";

import BookCard from "../UI/BookCard";

const dataPromise = fetch("/data.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(dataPromise);
  console.log(books);
  return (
    <BookCard books={books}></BookCard>
  );
};

export default AllBooks;
