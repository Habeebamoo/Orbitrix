"use client";

import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import { ArrowRight, ChevronDown } from "lucide-react"

const AboutPage = () => {
  return (
    <>
      <Header theme="light" />

      {/* 1st Section */}
      <section className="bg-gray-50 pt-30 lg:pt-40">
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">About Us</h1>
        <ChevronDown className="mx-auto" />

        {/* grid */}
        <div className="mt-6 md:mt-10 px-6 md:grid md:grid-cols-2 lg:w-[90%] min-[1250px]:w-[80%] mx-auto">

          <div className="relative w-[270px] sm:w-[450px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
            <img src="/satellite.jpg" className="h-full object-center object-cover" />

            <h1 className="absolute font-outfit py-3 px-4 w-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white bg-black right-[-40px] bottom-0">
              Explore mankind's final frontier
            </h1>
          </div>

          <div className="max-md:mt-8">
            <h1 className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Embark on a space journey with us</h1>

            <p className="font-jsl text-gray-500 mt-2 md:mt-4 sm:w-[90%]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            </p>

            <div className="flex-start gap-6 mt-6 font-outfit text-lg sm:text-xl">
              <span className="text-stone-600">01.</span>
              <p>Photography and images</p>
            </div>

            <hr className="text-stone-300 mt-3" />

            <div className="flex-start gap-6 mt-2 font-outfit text-lg sm:text-xl">
              <span className="text-stone-600">02.</span>
              <p>Educational materials</p>
            </div>

            <button className="font-outfit text-white py-3 md:py-4 px-10 cursor-pointer hover:bg-stone-600 active:bg-stone-600 mt-6 md:mt-8 rounded-full bg-stone-500">
              Portfolio
            </button>
          </div>
        </div>

      </section>


      {/* 2nd Section */}
      <section className="bg-gray-50 pt-10 sm:pt-20">
        <p className="font-jsl text-center text-[14px] font-bold">WHAT WE OFFER</p>

        <h1 className="mt-2 md:mt-4 lg:mt-6 text-center font-jsans w-[85%] sm:w-[90%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:font-bold xl:text-5xl">
          Adventure beyond the stars, adrenaline that defies gravity – welcome to our cosmic journey
        </h1>
      </section>


      {/* 3rd Section */}
      <section className="bg-gray-50 pt-10 sm:pt-20">
        <p className="font-jsans text-center">Peter Bowman</p>
        <p className="font-jsl text-gray-500 text-center text-sm">Creative Director</p>


        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 md:px-10 xl:px-25">

          <div className="px-6 py-10 bg-white border-1 border-stone-300">
            <img src="/astro-icon.png" className="h-15 lg:h-20 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">Space Travel</h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>

          <div className="px-6 py-10 bg-white border-1 border-stone-300">
            <img src="/balloon-icon.png" className="h-15 lg:h-20 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">Hot Air Ballons</h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>

          <div className="px-6 py-10 bg-white border-1 border-stone-300">
            <img src="/jet-icon.png" className="h-25 lg:h-30 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-4">Private Jets</h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>
          
        </div>
      </section>


      {/* Carousel section */}
      <Carousel />

      <Footer />
    </>
  )
}

export default AboutPage