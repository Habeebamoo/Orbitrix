"use client";

import { Menu } from "lucide-react"
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(true)

  const showNavbar = () => {
    setNavbarActive(true)
  }

  return (
    <header className="p-5 lg:px-18 lg:py-9 flex-between bg-black">
      {navbarActive && <Navbar setNavbarActive={setNavbarActive} />}

      <div>
        <img src="/logo.png" alt="Orbitrix Logo" className="h-8 lg:h-10" />
      </div>
      <div className="flex-between font-outfit gap-20">
        <div className="max-lg:hidden text-white flex-between gap-7">
          <p>Home</p>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>

        <div className="cursor-pointer" onClick={showNavbar}>
          <Menu color="white" size={27} />
        </div>
      </div>
    </header>
  )
}

export default Header