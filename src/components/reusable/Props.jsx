import Image from "next/image"

export default function Props( {icon, text} ) {
    return (
      <div>
          <Image src={icon} className="flex justify-auto"></Image>
          <p className="">{text}</p>
      </div>
    )
  }