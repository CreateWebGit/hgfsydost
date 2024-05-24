"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { navLinks } from "./data";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import {
  MdEmail,
  MdOutlineAccessTime,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { BsTelephoneFill, BsLinkedin, BsFacebook } from "react-icons/bs";

//import Logo from "./logo/HGF_logo_RGB_POS111.png";

import { FaLinkedinIn } from "react-icons/fa";

import styles from "./styles.module.css";
import { cn } from "@/utils/utils";
import Contact from "./Contact";

const Navbar = ({ topbar }) => {
  const [isNav, setIsNav] = useState(false);
  const [isSublinks, setSublinks] = useState(false);
  const [sticky, setSticky] = useState(true);
  // const scroll = scrollInfo.y;
  // let test = "-100%";

  const router = useRouter();
  const path = router.path;
  const pathname = usePathname();

  const handleNav = () => {
    setIsNav(!isNav);
  };

  /*
	useEffect(() => {
		const handleScroll = () => {
			if (scroll > 10.0) {
				//setSticky(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
	});
	*/

  // const styleprops = { scroll, isNav, background };

  // const classes = useStyles(styleprops);

  return (
    <>
      <div
        className={cn(
          "w-full px-4 relative top-0 z-50 border-b border-b-black/10"
        )}
      >
        <div className={cn(topbar ? "w-full" : "hidden")}>
          <div className="hidden md:flex justify-between h-12 m-auto items-center xl:w-[1200px]">
            <Contact />
            <div className="w-[130px] flex justify-around items-center">
              <BsFacebook color="#F49A11" />
              <AiFillInstagram color="#F49A11" />
              <BsLinkedin color="#F49A11" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center m-auto h-24 lg:w-[1200px]">
          <Link href={"/"} className={styles.logoLink}>
            <div className="cursor-pointer">
              <Image
                className="logo"
                src="/logo/HGF_logo_RGB_POS111.png"
                width={280}
                height={90}
              />
            </div>
          </Link>
          <ul className="hidden md:flex list-none">
            {navLinks.map((link) => {
              return (
                <>
                  {link.name === "SERVICE" ? (
                    <div
                      className="relative ml-5"
                      onMouseEnter={() => setSublinks(true)}
                      onMouseLeave={() => setSublinks(false)}
                    >
                      <div className="flex items-center">
                        <li>
                          <Link legacyBehavior key={link.id} href={link.path}>
                            <a
                              className={cn(
                                "no-underline text-white before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-orange-500 before:duration-300 before:ease-in-out",
                                router.pathname === link.path
                                  ? "before:scale-x-100"
                                  : "before:scale-x-0 hover:scale-x-100"
                              )}
                            >
                              {link.name}
                            </a>
                          </Link>
                        </li>
                        <MdKeyboardArrowDown color="#fff" />
                      </div>
                      {isSublinks ? (
                        <div className={styles.subLinksConatner}>
                          {link.sublinks.map((sublink) => {
                            return (
                              <div className={styles.subLinkItem}>
                                <Link
                                  legacyBehavior
                                  key={sublink.id}
                                  href={sublink.path}
                                >
                                  <a>{sublink.name}</a>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div>
                      <li className="flex items-center relative ml-5 cursor-pointer">
                        <Link legacyBehavior key={link.id} href={link.path}>
                          <a
                            className={cn(
                              "no-underline text-slate-600 before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:top-6 before:rounded-md before:left-0 before:bg-orange-500 before:duration-300 before:ease-in-out",
                              pathname === link.path
                                ? "before:scale-x-100"
                                : "before:scale-x-0 before:hover:scale-x-100"
                            )}
                          >
                            {link.name}
                          </a>
                        </Link>
                      </li>
                    </div>
                  )}
                </>
              );
            })}
          </ul>
          <div
            onClick={handleNav}
            className="block z-50 cursor-pointer md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className={cn(
          isNav
            ? "fixed left-0 top-0 w-full h-screen bg-slate-800/70 z-50 block md:hidden"
            : ""
        )}
      />
      <div
        className={cn(
          "fixed h-screen top-0 bg-[#fff] transition-all duration-500 ease-in z-[999] w-3/4 flex flex-col justify-between",
          isNav ? "left-0" : "left-[-100%]"
        )}
      >
        <div className="flex items-center relative">
          <div>
            <p></p>
          </div>
          {/*<Image src={logo} width="80" height="80" alt="create web" />*/}
          <div
            onClick={handleNav}
            className="rounded-full bg-white p-3 shadow-md absolute top-3 right-3"
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-1/2 m-auto">
            <ul className="no-underline flex flex-col bg-white first:border-t">
              {navLinks.map((link) => {
                return (
                  <>
                    <Link key={link.id} href={link.path} onClick={handleNav}>
                      <li
                        key={link.id}
                        className="py-4 pl-4 text-left border-b border-solid border-black/10 "
                      >
                        {link.name}
                      </li>
                    </Link>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={styles.navMobileSlogan}>
            <p>Låt oss konekta</p>
          </div>

          {/*
            <div className={styles.navMobileSocialContainer}>
              <a href="#">
                <div className={styles.navMobileSocial}>
                  <Social socialtype="facebook" />
                </div>
              </a>
              <a href="#">
                <div className={styles.navMobileSocial}>
                  <Social socialtype="instagram" />
                </div>
              </a>
              <a href="#">
                <div className={styles.navMobileSocial}>
                  <Social socialtype="linkedin" />
                </div>
              </a>
              
            </div>
            */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
