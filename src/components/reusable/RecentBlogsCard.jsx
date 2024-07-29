import Link from 'next/link'
import parser from "html-react-parser"
import Image from 'next/image'
import { FaCalendar } from 'react-icons/fa'

export default function RecentBlogsCard({ thumbnail, title, content, date }) {
  return (
    <Link href={`/blogs/${title}`} className="shadow-md border-2 mx-auto mb-8 flex max-w-md flex-col rounded-2xl bg-white pr-4 md:max-w-5xl md:flex-row md:items-center md:hover:scale-105 transition-all duration-300">
      <div className="md:mr-8">
        <Image className="w-[300px] h-[200px] object-cover" width={200} height={200} src={thumbnail} alt="Cover Image" />
      </div>
      <div className="py-4 sm:py-8 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="block text-2xl font-medium text-gray-700">{title}</p>
          <p className="text-gray-400 flex items-center gap-2 mr-8">{date}<FaCalendar className='mb-1' /></p>
        </div>
        <p className="my-6 text-gray-500 w-[500px] truncate-line">{parser(content)}</p>
      </div>
    </Link>

  )
}