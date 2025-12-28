import Header from "@/components/Header"

const page = () => {
  return (
    <main>
      <Header />

      {/* hero section */}
      <section className="relative lg:mt-0 max-md:pt-60 max-md:bg-black">
        <img src="/hero.jpeg" className="w-full lg:object-cover" />

        <div className="absolute bottom-0 left-0 right-0 lg:top-[25%] max-sm:top-[90%] z-0 px-6 lg:px-20 lg:object-cover lg:object-[70%_100%] font-bold font-inter text-white">
          <p className="md:text-lg font-outfit mb-2 lg:mb-4">INNOVATE. AUTOMATE. ELEVATE</p>
          <h1 className="lg:mt-0 text-4xl md:text-5xl lg:text-8xl md:text-6xl flex-start">
            <span>WE</span>
            <img src="/astro.png" className="h-15 md:h-18 lg:h-25" />
            <span>BUILD</span>
            
          </h1>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-8xl md:text-6xl">
            WHAT'S
            <span className="sm:hidden cl
            ml-3">NEXT</span>
          </h1>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-8xl md:text-6xl max-sm:hidden">
            NEXT
          </h1>
        </div>
      </section>

      <section className="bg-black max-md:pt-70 max-lg:pt-20 pb-100 px-6">
        {/* mobile */}
        <div className="sm:hidden">
          <div className="relative p-2">
            <img src="/guillermo.jpg" className="absolute h-[300px] w-[350px] right-[-10px]" />
            <img src="/history.jpg" className="absolute top-[150px] left-0 h-[400px]" />
          </div>

          <p className="text-gray-300 text-[15px] w-[80%] leading-[25px] font-jsl max-sm:mt-140">
            Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
          </p>

          <p className="text-gray-300 text-[15px] w-[80%] leading-[25px] font-jsl mt-4">
            Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
          </p>
        </div>

        {/* desktop */}
        <div className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto">
          <div className="flex-center">
            <img src="/guillermo.jpg" className="w-full lg:w-[500px]" />
          </div>

          <div>
            <img src="/history.jpg" className="md:h-[500px]" />

            <p className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-[25px] font-jsl max-sm:mt-160 mt-6">
              Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
            </p>

            <p className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-[25px] font-jsl mt-4">
              Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page