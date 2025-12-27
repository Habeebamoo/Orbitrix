import Header from "@/components/Header"

const page = () => {
  return (
    <main>
      <Header />

      {/* hero section */}
      <section className="relative lg:mt-0 max-md:pt-60 max-md:bg-black">
        <img src="/hero.jpeg" className="w-full lg:object-cover" />

        <div className="absolute bottom-0 left-0 right-0 lg:top-[25%] max-sm:top-[90%] z-0 px-6  lg:px-10 lg:object-cover lg:object-[70%_100%] font-bold font-inter text-white">
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

      <section className="bg-black h-[1000px]"></section>
    </main>
  )
}

export default page