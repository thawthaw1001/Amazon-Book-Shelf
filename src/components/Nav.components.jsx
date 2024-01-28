import React from "react";

const NavComponents = () => {
  return (
    <nav className=" flex justify-between px-3 py-5 border shadow-md items-center bg-slate-300">
      <h1>
        <img className=" w-[90px] y-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322" alt="" />
      </h1>
      <div>
        <p>Menu</p>
      </div>
    </nav>
  );
};

export default NavComponents;
