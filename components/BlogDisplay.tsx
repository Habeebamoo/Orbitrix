interface Props {
  img: string,
  title: string,
  content: string,
  date: string
}

const BlogDisplay = ({ img, title, content, date }: Props) => {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 border-1 border-gray-100 cursor-pointer">
      <div className="h-65 overflow-hidden">
        <img src={img} className="h-full w-full object-center object-cover hover:scale-110 ease-in-out duration-600 transition-transform" />
      </div>
      <div className="p-6">
        <p className="font-outfit py-1 px-5 rounded-full bg-gray-600 text-sm inline-block text-white">
          Trending
        </p>

        <h1 className="font-outfit text-xl md:text-2xl mt-2 md:mt-4">{title}</h1>

        <p className="font-jsl text-gray-500 text-[15px] mt-2 md:mt-4">{content}</p>

        <hr className="w-16 mt-5" />

        <p className="font-jsl text-gray-400 text-[12px] mt-4 md:mt-6">{date}</p>
      </div>
    </div>
  )
}

export default BlogDisplay