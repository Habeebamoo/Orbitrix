import BlogDisplay from "@/components/BlogDisplay"
import BlogSearchBox from "@/components/BlogSearchBox"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { blogs } from "@/data/blogs"
import { Blog } from "@/types/blog"
import { ChevronDown } from "lucide-react"

const BlogPage = () => {
  return (
    <main className="bg-gray-50 pt-30 lg:pt-40">
      <Header theme="light" />

      <div>
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">Blog List</h1>
        <ChevronDown className="mx-auto" />
      </div>

      <section className="mt-6 lg:mt-12 px-6 lg:px-10 xl:px-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mb-20">
        {/* blogs */}
        <div className="lg:col-span-2">
          {blogs.map((blog: Blog) => <BlogDisplay key={blog._id} blog={blog} />)}
        </div>

        {/* search bar */}
        <div className="max-lg:mt-15">
          <BlogSearchBox />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage