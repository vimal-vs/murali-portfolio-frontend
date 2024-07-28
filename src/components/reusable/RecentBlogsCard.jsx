import Link from 'next/link'
import parser from "html-react-parser"

export default function RecentBlogsCard({ thumbnail, title, content, date }) {
  return (
    <Link href={`/blogs/${title}`} className="shadow-md border-2 mx-auto mb-8 flex max-w-md flex-col rounded-2xl bg-white px-4 md:max-w-5xl md:flex-row md:items-center hover:scale-105 transition-all duration-300">
      <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
        <img className="rounded-2xl" src={thumbnail} alt="Cover Image" />
      </div>
      <div className="py-4 sm:py-8">
        <p className="mb-6 block text-2xl font-medium text-gray-700">{title}</p>
        <p className="mb-6 text-gray-500">{parser(content)}</p>
        <div className="flex">
          <p className="w-56">
            <span className="text-sm text-gray-400">{date}</span>
          </p>
        </div>
      </div>
    </Link>

  )
}