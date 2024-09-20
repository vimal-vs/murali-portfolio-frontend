import Image from "next/image"
import Circle from '@assets/blackCircle.svg'
import Arrow from '@assets/arrow_RU.svg'
import Link from "next/link"

export default function DownloadCard({ name, bgColor, icon, link, textColor }) {
  return (
    <div className="py-4 flex justify-center">
      <div className={name === "Media Kit" ? `block p-6 h-[180px] max-w-sm rounded-3xl text-white columns-2 border-b-4 border-black` : `block p-6 max-w-sm h-[180px] rounded-3xl columns-2 border-b-4 border-black`} style={{ backgroundColor: bgColor }}>
        <h1 className="text-xl ml-2 mt-4 whitespace-nowrap">{name}</h1>
        <div className="mt-10 relative">
          <Link href={link} type="button" className="absolute ml-9 mt-1">Click Here</Link>
          <Image src={Circle} alt="logo" width={30} height={30} className="absolute" />
          <Image src={Arrow} alt="logo" width={17} height={15} className="absolute m-2" />
        </div>
        <Image src={icon} alt="logo" width={150} height={150} className="pr-13" />
      </div>
    </div>
  )
}