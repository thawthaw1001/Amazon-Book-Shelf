import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "./Notfound";

const App = () => {
  const { loading, data, error } = useFetch(GetBookData, "book");

  return (
    <div>
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
      </Routes>
    </div>
  );
};

export default App;

{
  /* <div>
{fetch.loading ? (<h1>Loading...</h1>) : (<>
  {fetch.data ? <div>{JSON.stringify(fetch.data)}</div> : <h1>{fetch.error}</h1>}
</>)}
</div> */
}

{
  /* <div>{loading ? <h1>Loading...</h1> : <>
  {data ? <>{JSON.stringify(data)}</> : <h1>{error}</h1> }</>}</div> */
}
