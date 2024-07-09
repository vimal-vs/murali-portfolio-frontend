import Image from "next/image"
import pic from '../assets/downloadCard_icon_1.svg'
import Circle from '../assets/blackCircle.svg'
import Arrow from '../assets/arrow_RU.svg'

export default function DownloadCard() {
  return (
    <div className="py-4 flex justify-center">
        <div className="block p-6 max-w-sm bg-indigo-400 rounded-3xl text-white columns-2 border-b-4 border-black">
            <h1 className="text-xl pb-16 pr-11 pl-1">Media Kit</h1>
            <div>
              <button type="button" className="absolute ml-9 mt-1">Click Here</button>
              <Image src={Circle} width={30} height={30} className="absolute"/>
              <Image src={Arrow} width={17} height={15} className="absolute m-2"/>
            </div>
            <Image src={pic} width={150} height={150} className="pr-13"/>
        </div>
    </div>
  )
}


// className="flex text-sm m-1 justify-center"
// className="py-2"