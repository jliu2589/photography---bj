import { MdMenu } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  //Toggle Hamburger Menu
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div className="relative">
      <nav className="flex flex-row justify-between">
        <div className="">Logo</div>
        <button className="hamburger-button mr-1 p-3" onClick={handleClick}>
          <MdMenu />
        </button>
      </nav>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } menu fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-white text-center`}
      >
        <button
          onClick={handleClick}
          className="w-full bg-black text-center text-white"
        >
          Close
        </button>
        <ul className="my-1 text-center">About us</ul>
        <ul className="my-1 text-center">Gallery</ul>
        <ul className="my-1 text-center">Rates</ul>
        <ul className="my-1 text-center">FAQ</ul>
        <ul className="mt-1 bg-black py-2 text-center text-white">Book now</ul>
      </div>
    </div>
  );
}
export default Navbar;
