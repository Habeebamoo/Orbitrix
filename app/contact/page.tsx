import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ChevronDown, Mail, MapPin, Smartphone } from "lucide-react"

const ContactPage = () => {
  return (
    <main className="bg-gray-50 pt-30 lg:pt-40">
      <Header theme="light" />

      <div>
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">Contact Us</h1>
        <ChevronDown className="mx-auto" />
      </div>

      {/* Grid Sectin */}
      <section className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-6 px-6 md:px-10 xl:px-20 mb-30">
        <div>
          <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">CONTACT US</p>

          <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-3">
            Have questions? Get in touch!
          </h1>

          <p className="font-jsl text-gray-500 mt-3 md:mt-4 text-[15px] md:text-[16px]">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>

          <div className="font-jsl text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-8">
            <MapPin />
            <p>
              785 15h Street, Office 478 Berlin
            </p>
          </div>

          <div className="text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-6">
            <Smartphone />
            <p className="font-inter font-bold text-black">
               +1 800 555 25 69
            </p>
          </div>

          <div className="font-jsl text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-6">
            <Mail />
            <p>
              info@email.com
            </p>
          </div>
          
        </div>

        <div>

        </div>
      </section>


      <Footer />
    </main>
  )
}

export default ContactPage