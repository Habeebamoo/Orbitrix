import { Blog } from "@/types/blog"
import { redirect } from "next/navigation" 

const AboutBlogDisplay = ({ blog }: { blog: Blog }) => {
  const toBlog = () => {
    redirect(`/blog/${blog._id}`)
  }

  return (
    <div className="px-6 cursor-pointer" onClick={toBlog}>
      <div className="h-80 w-full overflow-hidden">
        <img src={blog.img} className="h-full w-full object-center object-cover hover:scale-110 active:scale-120 duration-500 ease-in-out" />
      </div>

      <div className="flex-start gap-4 mt-6">
        <hr className="w-10" />
        <span className="text-[12px] font-outfit">STARGAZING</span>
        <div className="h-1 w-1 rounded-full bg-gray-300"></div>
        <span className="text-[12px] font-jsl text-gray-400">{blog.date}</span>
      </div>

      <h1 className="font-outfit mt-2 text-lg pl-12">{blog.title}</h1>
    </div>
  )
}

export default AboutBlogDisplay