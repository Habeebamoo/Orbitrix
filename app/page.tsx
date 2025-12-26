import Header from "@/components/Header"

const page = () => {
  return (
    <main>
      <Header />

      {/* hero section */}
      <section className="relative lg:mt-28">
        <img src="/heroimg.jpg" className="h-[700px] w-full lg:object-cover lg:object-[0%_65%]" />

        <div className="absolute bottom-0 left-0 right-0 max-lgtop-[50%] lg:top-[20%] bg-gradient-to-b from-transparent from-0% via-black/60 via-40% to-black to-black/60% z-0 px-6 font-bold">

          <h1 className="mt-25 lg:mt-0 text-white text-5xl lg:text-8xl md:text-6xl font-inter">WE BUILD</h1>
          <h1 className="mt-4 text-white text-5xl lg:text-8xl md:text-6xl font-inter">WHAT'S</h1>
          <h1 className="mt-4 text-white text-5xl lg:text-8xl md:text-6xl font-inter">NEXT</h1>
        </div>
      </section>

      <section className="bg-black h-[1000px]"></section>
    </main>
  )
}

export default page