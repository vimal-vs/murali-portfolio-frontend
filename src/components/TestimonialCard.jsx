import Image from 'next/image'
import quote from '../assets/inverted_quote.svg'

export default function TestimonialCard({ name, designation, content }) {
    return (
        <div className="py-4 flex justify-center">
            <div className="block px-4 py-2 max-w-md bg-purple rounded-2xl border">
                <Image src={quote} width={50} height={50} className="pb-4" />
                <h1 className="mb-2 font-sm text-white">
                    {content}
                </h1>
                <p className=" font-md text-white">{name}</p>
                <p className=" font-normal text-yellow-400 pb-4">{designation}</p>
            </div>
        </div>
    )
}
