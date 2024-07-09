import Image from 'next/image'
import quote from '../assets/inverted_quote.svg'

export default function TestimonialCard() {
    return (
        <div className="py-4 flex justify-center">
       
            <div class="block px-4 py-2 max-w-md bg-indigo-400 rounded-2xl border ">
            <Image src={quote} width={50} height={50} className="pb-4" />
                <h1 class="mb-2 font-sm text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam inventore praesentium soluta neque rerum labore sint 
                    tempore adipisci, est, quod 
                </h1>
                <p className=" font-md text-white">John Doe</p>
                <p className=" font-normal text-yellow-400 pb-4">xyz xyz</p>
            </div>

        </div>
    )
}
