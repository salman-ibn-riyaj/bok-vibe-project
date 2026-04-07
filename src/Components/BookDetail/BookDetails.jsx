import React, { useContext} from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../Context/BookContextProvider";

const BookDetails = () => {

  const {storedBooks, setStoredBooks, handleMarkAsRead, handleStoredWishlist} = useContext(BookContext);

  console.log(storedBooks, setStoredBooks);

  const books = useLoaderData();
  console.log(books);

  const params = useParams();
  console.log(params);

  const expectedBook = books.find((book) => book.bookId == params.detailId);
  console.log(expectedBook);

  return (
    <div className="card p-5 lg:card-side bg-base-100 shadow-sm">
      <figure className="m-0 flex justify-center items-center bg-slate-200 rounded-3xl w-[45%]">
        <img
          src={expectedBook.image}
          className="w-[35%] h-[75%] object-contain"
          alt="Album"
        />
      </figure>
      <div className="card-body w-full">
        <div className="border-b-2 border-b-gray-300">
          <h2 className="card-title">{expectedBook.bookName}</h2>
          <h3 className="mb-4">{expectedBook.author}</h3>
        </div>
        <div className="border-b-2 border-b-gray-300">
          {expectedBook.category}
        </div>
        <div className="border-b-2 border-b-gray-300 pb-3">
          <p className="pb-3">{expectedBook.review}</p>

          <div className="flex items-center justify-between gap-3 w-50">
            {expectedBook.tags.map((tag, index) => (
              <div key={index} className="badge text-green-700 bg-green-200">
                {" "}
                {tag}{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2>Number of Pages: {expectedBook.totalPages}</h2>
          <h2>Publisher: {expectedBook.publisher}</h2>
          <h2>Year of Publishing: {expectedBook.yearOfPublishing}</h2>
          <h2>Rating: {expectedBook.rating}</h2>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleMarkAsRead(expectedBook)}
            className="btn bg-white border-2 border-black"
          >
            Mark As Read
          </button>
          <button onClick={()=>handleStoredWishlist(expectedBook)} className="btn btn-accent text-white">Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
