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
    </div>
  )
}

export default BlogSearchBox