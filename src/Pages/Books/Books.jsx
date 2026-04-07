import React, { useContext, useState } from "react";
import { BookContext } from "../../Components/Context/BookContextProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../Components/ReadList/ReadList";
import Wishlist from "../../Components/Wishlist/Wishlist";

const Books = () => {
  const { storedBooks, storedWishlist } = useContext(BookContext);
  console.log(storedBooks, storedWishlist);

  const [sortingType, setSortingType] = useState('');

  console.log(sortingType);


  return (
    <div className="my-10 container mx-auto">




      <div className="flex justify-center my-10">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            Sort: {sortingType}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>setSortingType('pages')} className="bg-amber-200 text-red-600 hover:bg-cyan-400 active:bg-blue-500">
              <a>Sort By Pages</a>
            </li>
            <li onClick={()=>setSortingType('rating')}>
              <a>Sort By Ratings</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType}></ReadList>
        </TabPanel>
        <TabPanel>
          <Wishlist sortingType={sortingType}></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
