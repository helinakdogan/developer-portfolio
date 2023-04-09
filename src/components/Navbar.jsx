import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (

    //semantic nav tag
    <nav
      //paddingX is special utility class created under styles.js
      //then, make it a shape with tailwind css
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >


      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link
          // '/' means top of the page
          to='/'
          className='flex items-center gap-2'

          onClick={() => {
            //setActive will track where we are on the page
            setActive("");
            //this is going to the scroll to the top of the page
            window.scrollTo(0, 0);
          }}
        >
    
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'  /> 

          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            <span className='sm:block hidden'> Helin Akdoğan</span>
          </p>

        </Link>


        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            //this is for getting each link and render an li for each of them
            //used a tag for rendering nav.title
            <li
              key={nav.id}
              //if li is active? change color + hover
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              //setActive will check if link is currently clicked 
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
          //this is mobile nav bar for small devices
          //you can check toggle state and close/open it
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            //when we click, we want to change the state
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar