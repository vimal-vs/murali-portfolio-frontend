import arrow from '@assets/arrow_2.svg'
import filler from '@assets/fillerImg.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentBlogs() {
  return (
    <div className="p-8 flex justify-center">
        <div class="block px-4 py-2 bg-[#516470] rounded-3xl border flex justify-self-end">
          <Image src={filler} className="pb-4"/>
          <div> 
            <h1 class="mb-2 text-4xl font-bold px-8 mt-5">Title Goes Here</h1>
            <p className=" font-normal text-lg px-5 mt-9 mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis 
              inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?
            </p>
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