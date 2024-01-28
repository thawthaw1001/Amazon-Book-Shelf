import React from "react";
import { useNavigate } from "react-router-dom";

const BookListComponents = ({ data }) => {
  const nav = useNavigate();
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div className=" flex flex-col justify-between w-[300px] h-[480px] border rounded-lg bg-slate-100 my-5">
      <div>
        <img
          className=" w-[300px] h-[300px] border rounded-t-lg"
          src={data.image}
          alt=""
        />
      </div>
      <div className=" px-2">
        <div className="">
          <h1 className=" line-clamp-1 overflow-hidden text-lg font-bold">
            {data.book}
          </h1>
          <h1 className=" text-sm text-slate-600">{data.author}</h1>
        </div>
        <div className=" line-clamp-3 overflow-hidden">
          <p>{data.description}</p>
        </div>
      </div>

      <div className=""> 
        <button
          className=" border w-[130px] h-10 bg-slate-500 text-center rounded-md text-yellow-50"
          onClick={handleBack}
        >
          Visiting Site ...
        </button>
      </div>
    </div>
  );
};

export default BookListComponents;
