"use client";

import Header from "@/components/Header"
import { ChevronDown } from "lucide-react"

const AboutPage = () => {
  return (
    <>
      <Header theme="light" />

      <section className="bg-gray-50 pt-30 lg:pt-40 pb-100">
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">About Us</h1>
        <ChevronDown className="mx-auto" />

        {/* grid */}
        <div className="mt-6 md:mt-10 px-6 md:grid md:grid-cols-2 lg:w-[90%] min-[1250px]:w-[80%] mx-auto">

          <div className="relative w-[300px] sm:w-[450px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
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
    </>
  )
}

export default AboutPage