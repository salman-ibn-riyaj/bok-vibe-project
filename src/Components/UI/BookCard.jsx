import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";

const BookCard = ({books}) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {books.map((book, index) => (
          <Link to={`/bookDetails/${book.bookId}`} key={index} className="card p-4 bg-base-100 shadow-sm">
            <figure className="w-full">
              <img
                className="rounded-xl bg-slate-300 h-55 p-4"
                src={book.image}
              />
            </figure>
            <div className="card-body flex">
              <div className="flex items-center justify-between gap-4">
                {book.tags.map((tag, index) => (
                  <div key={index} className="badge bg-green-200 text-green-600">{tag}</div>
                ))}
              </div>
              <h2 className="card-title">{book.bookName}</h2>
              <p>{book.author}</p>
              <div className="card-actions justify-between border-t-2 border-dashed border-gray-300">
                <div className="">{book.category}</div>
                <div className="flex items-center gap-1">
                  {book.rating} <IoIosStarOutline />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
