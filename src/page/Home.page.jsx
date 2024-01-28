import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetBookData, "book");
  return (
    <div className=" border shadow-md containerPj">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" flex flex-wrap justify-between gap-3">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
             <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
