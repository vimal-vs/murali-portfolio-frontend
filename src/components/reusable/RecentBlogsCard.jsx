import arrow from '@assets/arrow_2.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentBlogsCard({ thumbnail, title, content, date, url }) {
  return (
      <article class="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center hover:bg-[#FDC435]">
      <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
        <img class="rounded-2xl" src={thumbnail} alt="Cover Image"/>
      </div>
      <div class="py-4 sm:py-8">
        <a href={`${url}`} class="mb-6 block text-2xl font-medium text-gray-700">{title}</a>
        <p class="mb-6 text-gray-500">{content}</p>
        <div class="flex">
          <p class="w-56">
            <span class="text-sm text-gray-400">{date}</span>
          </p>
        </div>
      </div>
      </article>
    
  )
}


// 516470
