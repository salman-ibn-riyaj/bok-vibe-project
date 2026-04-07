import React from "react";
import bannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[75vh] my-4 container mx-auto rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn btn-success mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
