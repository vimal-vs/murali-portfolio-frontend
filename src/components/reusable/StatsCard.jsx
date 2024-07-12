import Image from "next/image";

export default function StatsCard( {icon, stats, content} ) {
  return (
    <div className="py-4 flex justify-center">
        <div className="p-5">
          <div className="px-10 ml-10">
            <h1 className="text-4xl absolute mt-5">{stats}</h1>
            <Image src={icon} width={50} height={50} className="ml-10"></Image>
          </div>
          <p className="mt-3 ">{content}</p>
        </div>
        
    </div>
  )
}
