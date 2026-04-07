import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContextProvider";
import { IoIosStarOutline } from "react-icons/io";

const Wishlist = ({sortingType}) => {
  const wishlist = useContext(BookContext);
  const { storedWishlist } = wishlist;

  const [filteredWishlist, setFilteredWishlist] = useState(storedWishlist)
  
    useEffect(()=>{
          if(sortingType){
              if(sortingType === 'pages'){
                  const sortedData = [...storedWishlist].sort((a,b)=> a.totalPages - b.totalPages);
                  console.log(sortedData);
                  setFilteredWishlist(sortedData);
              }else if(sortingType === 'rating'){
                  const sortedData = [...storedWishlist].sort((a,b)=> a.rating - b.rating);
                  console.log(sortedData);
                  setFilteredWishlist(sortedData);
  
              }
          }
    },[sortingType, storedWishlist])


  return (
    <div>
      {filteredWishlist.length === 0 ? (
        <div className="text-center p-5 bg-amber-100 rounded-2xl my-2 container mx-auto"><h2 className="font-bold">No Wishlist Data found!</h2> </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWishlist.map((book, index) => (
            <div
              to={`/bookDetails/${book.bookId}`}
              key={index}
              className="card p-4 bg-base-100 shadow-sm"
            >
              <figure className="w-full">
                <img
                  className="rounded-xl bg-slate-300 h-55 p-4"
                  src={book.image}
                />
              </figure>
              <div className="card-body flex">
                <div className="flex items-center justify-between gap-4">
                  {book.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge bg-green-200 text-green-600"
                    >
                      {tag}
                    </div>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
