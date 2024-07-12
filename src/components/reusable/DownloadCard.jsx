import Image from "next/image"
import Circle from '@assets/blackCircle.svg'
import Arrow from '@assets/arrow_RU.svg'
import Link from "next/link"

export default function DownloadCard({ name, bgColor, icon, link }) {
  return (
    <div className="py-4 flex justify-center">
      <div className={`block p-6 max-w-sm rounded-3xl text-white columns-2 border-b-4 border-black`} style={{ backgroundColor: bgColor }}>
        <h1 className="text-xl pb-16 pr-11 pl-1">{name}</h1>
        <div>
          <Link href={link} type="button" className="absolute ml-9 mt-1">Click Here</Link>

          <Image src={Circle} width={30} height={30} className="absolute" />
          <Image src={Arrow} width={17} height={15} className="absolute m-2" />
        </div>
        <Image src={icon} width={150} height={150} className="pr-13" />
      </div>
    </div>
  )
}