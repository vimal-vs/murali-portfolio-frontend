import arrow from '@assets/arrow_2.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentBlogsCard( {thumbnail, title, content, bgColor} ) {
  return (
    <div className="p-5 flex justify-center">
      <a href="#" className={"flex flex-col items-center bg-gray-400 border border-gray-200 rounded-lg md:flex-row hover:bg-gray-400"}>
        <img className="object-none object-scale-down rounded-t-lg h-96 md:rounded-none md:rounded-s-lg px-4 py-6" src={thumbnail} alt=""></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
            <p className="mb-3 font-normal">{content}</p>
            <div className='flex justify-end gap-5 mt-4'>
              <Link href='https://www.spotify.com'>Continue reading</Link>
              <Image src={arrow}></Image>
            </div>
        </div>
      </a>

    </div>
  )
}


// 516470
