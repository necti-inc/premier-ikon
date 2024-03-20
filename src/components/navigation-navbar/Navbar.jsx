"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./navbar.module.css";
import theme from "@/app/theme";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderLogo from "../../../public/header-logo.png";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 5,
    title: "Partners",
    url: "/partners",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dasbhoard",
  // },
];

const Navbar = () => {
  const router = useRouter(); // Initialize the router object
  const [hoveredLinks, setHoveredLinks] = useState({});

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll on body
    } else {
      document.body.style.overflow = "";
    }
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    setCurrentPath(url);
  }, [pathname, searchParams]);

  const onLinkClick = (url) => {
    if (isMenuOpen) {
      router.push(url);
      setTimeout(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }, 180);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: false });
  };

  return (
    <div
      className={style.container}
      style={{
        backgroundColor: theme.black,
        borderColor: isMenuOpen ? theme.grey : "transparent",
      }}
    >
      <button
        onClick={() => {
          setCurrentPath("/");
        }}
      >
        <Link style={{ color: theme.black }} href={"/"}>
          <div>
            <Image className={style.headerLogo} src={HeaderLogo} alt={"test"} />
          </div>
        </Link>
      </button>
      <button
        onClick={toggleMenu}
        className={style.menuButton}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            className={style.mobileButton}
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: theme.primaryColor }}
            className={style.mobileButton}
            icon={faBars}
          />
        )}
      </button>
      <div style={{ color: theme.black }} className={style.links}>
        {links.map((link) => (
          <button
            onMouseEnter={() => handleMouseEnter(link.id)}
            onMouseLeave={() => handleMouseLeave(link.id)}
            key={link.id}
            onClick={() => {
              setCurrentPath(link.url);
            }}
          >
            <Link
              style={{
                color: hoveredLinks[link.id]
                  ? theme.primaryColor
                  : theme.lightTan,
                borderColor:
                  currentPath === link.url ? theme.primaryColor : theme.black,
              }}
              key={link.id}
              href={link.url}
              className={style.link}
            >
              {link.title}
            </Link>
          </button>
        ))}
      </div>
      {isMenuOpen && (
        <div
          style={{ backgroundColor: theme.lightTan }}
          className={style.mobileHeader}
        >
          {links.map((link) => (
            <button
              style={{ borderColor: theme.grey, color: theme.black }}
              onClick={() => onLinkClick(link.url)}
              className={style.linkMobile}
              key={link.id}
            >
              {/*<Link*/}
              {/*  style={{ borderColor: theme.grey }}*/}
              {/*  href={link.url}*/}
              {/*  // className={style.linkMobile}*/}
              {/*>*/}
              {link.title}
              {/*</Link>*/}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
