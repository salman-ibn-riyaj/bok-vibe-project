import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [storedWishlist, setStoredWishlist] = useState([]);

  

  const handleMarkAsRead = (markedBooks) => {

    const isExistInWishlist = storedWishlist.find(book => book.bookId === markedBooks.bookId);
    if(isExistInWishlist){
        toast.error(`${markedBooks.bookName} is already in wishlist`);
        return;
    }
    const findedArray = storedBooks.find(
      (book) => book.bookId === markedBooks.bookId,
    );

    if (findedArray) {
      toast.error("Already Marked as Read");
      return;
    } else {
      const updatedStoredBooks = [...storedBooks, markedBooks];
      setStoredBooks(updatedStoredBooks);
      toast.success("Successfully Marked As Read");
    }
  };


  const handleStoredWishlist = (expectedWishlistBook) => {

    const isExistInReadList = storedBooks.find(book =>book.bookId === expectedWishlistBook.bookId);
    if(isExistInReadList){
        toast.error(`${expectedWishlistBook.bookName} is already marked as Read`);
        return;
    }

    const finedArray2 = storedWishlist.find(
      (book) => book.bookId === expectedWishlistBook.bookId,
    );

    if (finedArray2) {
      toast.error("already added to wishlist");
    } else {
      const updatedWishlist = [...storedWishlist, expectedWishlistBook];
      setStoredWishlist(updatedWishlist);
      toast.success(`${expectedWishlistBook.bookName} successfully added to wishlist`)
    }
  };
  console.log(storedWishlist);
  console.log(storedBooks);

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    handleStoredWishlist,
    storedWishlist,
  };

  return (
    <div>
      <BookContext.Provider value={data}>{children}</BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
