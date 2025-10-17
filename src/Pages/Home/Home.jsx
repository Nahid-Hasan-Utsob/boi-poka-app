import React from "react";
import Herobanner from "../../assets/pngwing 1.png";
import Books from "../Books/Books";

export default function Home() {
  return (
    <section>
      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around justify-center">
          <div>
            <img src={Herobanner} className="max-w-sm rounded-lg " />
          </div>
          <div className="lg:w-2/4 w-2/3">
            <h1 className="lg:text-6xl text-4xl leading-14 font-bold lg:my-12 my-8 tracking-wider lg:leading-20 ">
              Books to freshen up your bookshelf
            </h1>
            <button className="text-[18px] font-semibold lg:w-auto w-full text-white bg-[#23BE0A] py-4 px-7 rounded-lg">
              View The List
            </button>
          </div>

        </div>
        
      </div>
      
          <div className="text-center text-4xl font-semibold lg:pt-12 pt-4">
            <h2>Books</h2>
          </div>
          <Books></Books>
    </section>
  );
}
