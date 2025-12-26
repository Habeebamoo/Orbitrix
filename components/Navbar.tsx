import { ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FaDribbble, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";

interface Props {
  setNavbarActive: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setNavbarActive }: Props) => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href;

  const closeNavbar = () => {
    setNavbarActive(false)
  }

  return (
    <>
      {/* small screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-dark py-6 px-5">
        <div className="flex-between">
          <img src="/logo.png" className="h-10" />

          <div className="cursor-pointer" onClick={closeNavbar}>
            <X color="white" size={28} />
          </div>
        </div>

        {/* navs */}
        <div className="mt-15 text-[21px] font-outfit">
          <div
            className={isActive("/") ? "text-white font-bold" : "text-gray-300"}
          >
            Home
          </div>

          <div 
            className={isActive("/about") ? "text-white mt-2 font-bold flex-start gap-6" : "text-gray-300 mt-2 flex-start gap-6"}
          >
            <span>About Us</span>
            <ArrowRight />
          </div>

          <div 
            className={isActive("/services") ? "text-white mt-2 font-bold" : "text-gray-300 mt-2"}
          >
            Our Services
          </div>

          <div
            className={isActive("/contact") ? "text-white mt-2 font-bold" : "text-gray-300 mt-2"}
          >
            Contact Us
          </div>

          <div 
            className={isActive("/blog") ? "text-white mt-2 font-bold" : "text-gray-300 mt-2"}
          >
            Blog
          </div>
        </div>

        <hr className="text-gray-800 mt-8" />

        {/* socials */}
        <div className="mt-8 flex-start gap-6">
          <div className="text-white hover:text-blue-400 active:text-blue-400">
            <ImFacebook size={13} />
          </div>

          <div className="text-white hover:text-gray-400 active:text-gray-400">
            <FaXTwitter size={13} />
          </div>

          <div className="text-white hover:text-pink-500 active:text-pink-500">
            <FaDribbble size={14} />
          </div>

          <div className="text-white hover:text-purple-500 active:text-purple-500">
            <FaInstagram size={15} />
          </div>
        </div>
      </div>

      {/* large screens */}
      <div className="max-md:hidden fixed top-0 left-0 right-0 bottom-0">

        <div className="relative h-full w-full">
          <div className="absolute top-0 bottom-0 right-0 left-[980px] bg-dark pt-11 px-12">

            {/* logo */}
            <div className="flex-between">
              <img src="/logo.png" className="h-10" />

              <div className="cursor-pointer p-3 bg-gray-900 rounded-full" onClick={closeNavbar}>
                <X color="white" size={25} />
              </div>
            </div>

            {/* socials */}
            <div className="font-outfit mt-28">
              <div className="flex-start gap-6 cursor-pointer text-white hover:text-blue-400">
                <ImFacebook />
                <p className="text-xl">Facebook</p>
              </div>

              <div className="flex-start gap-6 mt-8 cursor-pointer text-white hover:text-gray-400">
                <FaXTwitter />
                <p className="text-xl">Twitter</p>
              </div>

              <div className="flex-start gap-6 mt-8 cursor-pointer text-white hover:text-pink-500">
                <FaDribbble />
                <p className="text-xl">Dribble</p>
              </div>

              <div className="flex-start gap-6 mt-8 cursor-pointer text-white hover:text-purple-500">
                <FaInstagram />
                <p className="text-xl">Instagram</p>
              </div>
            </div>

            <hr className="mt-28 text-gray-800" />

            <div className="mt-10">
              <p className="text-white font-outfit text-2xl">+1 840 841 25 69</p>
              <p className="text-gray-400 font-outfit mt-2">info@email.com</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar