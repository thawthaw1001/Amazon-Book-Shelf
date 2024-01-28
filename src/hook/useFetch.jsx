import React, { useEffect, useState } from 'react'
import { GetBookData } from '../service/book.service';

const useFetch = (fetchFunction, arg) => {
    const [data,setData] = useState({
      loading: true,
      data: null,
      error: null,
    });

    useEffect(() => {
      // (async () => {
      //   const res = await fetch("http://localhost:8000/book");
      //   const data = await res.json();
      //   console.log(data);
      // })();
  
      (async () => {
        try {
          const data = await fetchFunction(arg);
          setData((pre) => {
            return {
              loading: false,
              data: data,
              error: null,
            };
          }); 
        } catch (e) {
          setData((pre) => {
            return {
              loading: false,
              data: null,
              error: e.message,
            };
          });
        }
      })();
    }, []);

  return data;
}

export default useFetch