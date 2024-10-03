import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='mt-10 h-[40vh] md:h-[50vh] w-full flex flex-col gap-12 justify-center items-center'>
            <p className='text-4xl text-center md:text-start md:text-5xl font-sans font-medium'>Could not find requested resource <span className='text-yellow'>!</span></p>
            <Link href="/" className='text-3xl'>Return <span className='underline text-purple'>Home</span></Link>
        </div>
    )
}