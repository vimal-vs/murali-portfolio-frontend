import Link from 'next/link'
import parser from "html-react-parser"
import Image from 'next/image'
import { FaCalendar } from 'react-icons/fa'

export default function RecentBlogsCard({ thumbnail, title, content, date }) {
  return (
    // href={`/blogs/${title}`}
    <div className="shadow-md border-2 mx-auto mb-8 flex flex-col rounded-2xl bg-white md:pr-4 w-full md:flex-row md:items-center md:hover:scale-[1.01] transition-all duration-300">
      <div className="md:mr-8">
        <Image className="w-full rounded-t-2xl md:rounded-t-none md:!rounded-l-2xl md:w-[300px] h-[200px] object-cover border-r-2" width={200} height={200} src={thumbnail} alt="Cover Image" />
      </div>
      <div className="py-4 w-full pl-3">
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between md:items-center w-full">
          <p className="block text-2xl font-medium text-gray-700">{title}</p>
          <p className="text-gray-400 flex items-center gap-2 mr-8">{date}<FaCalendar className='mb-1' /></p>
        </div>
        <p className="md:my-6 my-3 text-gray-500 max-w-[500px] truncate-line pr-5">{parser(content)}</p>
      </div>
    </div>

  )
}