import arrow from '@assets/arrow_2.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentBlogsCard( {thumbnail, title, content, bgColor} ) {
  return (
    <div className="p-5 flex justify-center">
        <div className="block px-4 py-2 rounded-3xl border flex justify-self-end" style={ {backgroundColor: bgColor} }>
          <Image src={thumbnail} className="pb-4"/>
          <div> 
            <h1 class="mb-2 text-4xl font-bold px-8 mt-5">{title}</h1>
            <p className=" font-normal text-lg px-5 mt-9 mb-0">{content}</p>
            <div className='flex justify-end gap-5 mt-4'>
            <Link href='https://www.spotify.com'>Continue reading</Link>
            <Image src={arrow}></Image>
          </div>
          </div>
          
        </div>
    </div>
  )
}


// 516470