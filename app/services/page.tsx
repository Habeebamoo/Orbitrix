import Header from "@/components/Header"
import { ArrowRight, ChevronDown, ShipWheel } from "lucide-react"

const ServicePage = () => {
  return (
    <main className="bg-gray-50 pt-30 lg:pt-40 pb-200">
      <Header theme="light" />

      <div>
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">About Us</h1>
        <ChevronDown className="mx-auto" />
      </div>

      <div className="px-6 md:px-10 xl:px-20 mt-6">
        <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">OUR CORE CAPABILITIES</p>

        <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl lg:w-[60%] mt-2">Where advanced tech meets real-world impact</h1>
      </div>

      <section className="px-6 mt-12 lg:mt-16">
        {/* mobile */}
        <div className="sm:hidden">
          <div className="relative p-2">
            <img src="/guillermo.jpg" className="absolute h-[300px] w-[350px] right-[-10px]" />
            <img src="/history.jpg" className="absolute top-[150px] left-0 h-[400px]" />
          </div>

          <p className="text-[15px] w-[80%] leading-[25px] font-jsl max-sm:mt-140">
            At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
          </p>
        </div>

        {/* desktop */}
        <div className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto">
          <div className="flex-center">
            <img src="/guillermo.jpg" className="w-full lg:w-[500px]" />
          </div>

          <div>
            <img src="/history.jpg" className="md:h-[500px]" />

            <p className="text-[15px] lg:w-[80%] md:w-[80%] leading-[25px] font-jsl max-sm:mt-160 mt-6">
              At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pt-10 sm:pt-20 mt-4">
        <p className="font-jsl text-center text-[14px] font-bold">WHAT WE OFFER</p>

        <h1 className="mt-2 md:mt-4 lg:mt-6 text-center font-jsans w-[85%] sm:w-[90%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:font-bold xl:text-5xl">
          Adventure beyond the stars, adrenaline that defies gravity – welcome to our cosmic journey
        </h1>
      </section>

      <section className="bg-gray-50 pt-10 sm:pt-20 pb-20">
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

      <section>
        <div className="marquee">
          <div className="marquee-content2 font-outfit text-5xl lg:text-9xl md:text-7xl mt-6"
          >
          <span>AERIEL</span>
           <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>AERIEL</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-content2-reverse font-outfit text-5xl md:text-7xl lg:text-9xl mt-2"
          >
          <span>ADVENTURES</span>
           <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
            <span>ADVENTURES</span>
            <span>
             <ShipWheel className="animate-spin" />
           </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicePage