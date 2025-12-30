"use client";

import { Menu } from "lucide-react"
import { useState } from "react";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ theme }: { theme: "light" | "dark" }) => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false)

  const router = useRouter()
  const pathname = usePathname()
  
  const isActive = (href: string) => pathname === href;

  const showNavbar = () => {
    setNavbarActive(true)
  }

  const toHome = () => {
    router.push("/")
  }

  const toAbout = () => {
    router.push("/about")
  }

  const toServices = () => {
    router.push("/services")
  }

  const toContact = () => {
    router.push("/contact")
  }

  const toBlog = () => {
    router.push("/blog")
  }

  return (
    <header className={`${theme == "light" ? "bg-white border-b-1 border-b-gray-100" : "bg-black/50"} fixed top-0 left-0 right-0 p-5 lg:px-18 lg:py-9 flex-between z-20`}>
      {navbarActive && <Navbar theme={theme} setNavbarActive={setNavbarActive} />}

      <div>
        <img src={`${theme == "light" ? "/logo2.png" : "/logo.png"}`} alt="Orbitrix Logo" className="h-8 lg:h-10" />
      </div>

      <div className="flex-between font-outfit gap-20">

        {theme === "dark" ? 
          <div className="max-md:hidden flex-between gap-7">
            <p 
              className={isActive("/") ? "header-nav-dark-active" : "header-nav-dark"}
              onClick={toHome}
            >
              Home
            </p>

            <p 
              className={isActive("/about") ? "header-nav-dark-active" : "header-nav-dark"}
              onClick={toAbout}
            >
              About Us
            </p>

            <p
              className={isActive("/services") ? "header-nav-dark-active" : "header-nav-dark"}
              onClick={toServices}
            >
              Our Services
            </p>

            <p
              className={isActive("/contact") ? "header-nav-dark-active" : "header-nav-dark"}
              onClick={toContact}
            >
              Contact Us
            </p>

            <p
            className={isActive("/blog") ? "header-nav-dark-active" : "header-nav-dark"}
            onClick={toBlog}
            >
              Blog
            </p>
          </div>
        :
          <div className="max-md:hidden flex-between gap-7">
            <p 
              className={isActive("/") ? "header-nav-light-active" : "header-nav-light"}
              onClick={toHome}
            >
              Home
            </p>

            <p 
              className={isActive("/about") ? "header-nav-light-active" : "header-nav-light"}
              onClick={toAbout}
            >
              About Us
            </p>

            <p
              className={isActive("/services") ? "header-nav-light-active" : "header-nav-light"}
              onClick={toServices}
            >
              Our Services
            </p>

            <p
              className={isActive("/contact") ? "header-nav-light-active" : "header-nav-light"}
              onClick={toContact}
            >
              Contact Us
            </p>

            <p
            className={isActive("/blog") ? "header-nav-light-active" : "header-nav-light"}
            onClick={toBlog}
            >
              Blog
            </p>
          </div>
        }

        <div className="cursor-pointer" onClick={showNavbar}>
          <Menu color={theme == "dark" ? "white" : "black"} size={27} />
        </div>
      </div>
    </header>
  )
}

export default Header