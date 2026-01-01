import { Search } from "lucide-react"

const BlogSearchBox = () => {
  return (
    <div className="bg-white border-1 border-gray-100 p-6">
      <h1 className="font-outfit text-lg">Search</h1>

      <div className="relative">
        <Search className="absolute left-4 top-[34px]" size={18}  />
        <input 
          type="search"
          className="p-4 border-1 border-gray-200 rounded-full pl-11 mt-4 w-full font-jsl text-sm focus:outline-none"
          placeholder="Search..." 
        />
      </div>

      <div className="mt-8">
        <h1 className="font-outfit text-[18px]">Recent Posts</h1>

        {/* trending #1 */}
        <div className="mt-6 flex justify-start items-start gap-4">
          <div className="h-18 w-20 flex-none lg:h-20 lg:w-22">
            <img src="/robot-dogs.jpg" className="h-full w-full" />
          </div>
          <div>
            <div className="flex-start gap-2 text-[12px] flex-wrap">
              <p className="font-jsans">TRENDING</p>
              <div className="bg-gray-400 h-1 w-1 rounded-full"></div>
              <span className="font-jsl text-gray-500">December 13, 2025</span>
            </div>

            <h1 className="font-outfit text-lg mt-2">The Evolution of Robotics is here in Nigeria, Africa</h1>
          </div>
        </div>

        {/* trending #2 */}
        <div className="mt-6 flex justify-start items-start gap-4">
          <div className="h-18 w-20 flex-none lg:h-20 lg:w-22">
            <img src="/drone2.jpg" className="h-full w-full" />
          </div>
          <div>
            <div className="flex-start gap-2 text-[12px] flex-wrap">
              <p className="font-jsans">TRENDING</p>
              <div className="bg-gray-400 h-1 w-1 rounded-full"></div>
              <span className="font-jsl text-gray-500">December 11, 2025</span>
            </div>

            <h1 className="font-outfit text-lg mt-2">Orbitrix Drone is looking at changing the logistics system in Africa.</h1>
          </div>
        </div>

        <div className="h-15 mt-8 bg-gray-100">
          
        </div>
      </div>
    </div>
  )
}

export default BlogSearchBox