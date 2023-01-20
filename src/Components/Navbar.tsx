import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  //Toggle Hamburger Menu
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  //Close menu if click anywhere on Screen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target.closest(".menu") === null &&
        e.target.closest(".hamburger-button") === null
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);
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
        } menu absolute w-full bg-white text-center`}
      >
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
