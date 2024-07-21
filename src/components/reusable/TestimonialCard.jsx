import Image from 'next/image'
import quote from '@assets/inverted_quote.svg'

export default function TestimonialCard({ name, designation, content }) {
    return (
        <div className="w-[400px] h-[280px] flex flex-col bg-purple rounded-2xl border">
            <Image src={quote} alt="logo" width={50} height={50} className="my-6 ml-6" />
            <div className='flex flex-col justify-between h-full px-6'>
                <h1 className="mb-2 font-sm text-white">{content}</h1>
                <div>
                    <p className="font-medium text-white">{name}</p>
                    <p className="font-medium text-yellow pb-4">{designation}</p>
                </div>
            </div>
        </div>
    )
}
