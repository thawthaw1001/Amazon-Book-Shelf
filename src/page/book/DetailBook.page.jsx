import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { loading, data, error } = useFetch(GetBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div className=" bg-slate-200 h-screen">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className=" pt-[70px]">
              <div className=" flex mx-auto w-[1000px] h-[500px] border rounded-lg bg-slate-300 mb-5">
                <div className=" basis-1/2">
                  <img
                    className=" w-[500px] h-[500px] object-contain border rounded-t-lg"
                    src={data.image}
                    alt=""
                  />
                </div>

                <div className=" basis-1/2 flex flex-col justify-start px-2 pt-2">
                  <div className="">
                    <h1 className=" text-5xl font-bold">{data.book}</h1>
                    <h1 className=" text-xl text-gray-600 my-5">
                      {data.author}
                    </h1>
                  </div>
                  <div className="">
                    <p>{data.description}</p>
                  </div>
                  <div className=" mt-3">
                    <p className=" text-xl font-semibold">Rating : {data.rating} / 5</p>
                    <p className=" text-xl font-semibold">Price : $ {data.price}</p>
                  </div>

                  <div className="">
                    <button
                      className=" border w-20 h-10 mt-10 bg-slate-500 text-center rounded-md text-yellow-50"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
