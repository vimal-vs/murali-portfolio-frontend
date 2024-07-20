import Image from "next/image";
import filler from "@assets/fillerImg.svg";

export default function GalleryCard({ location, date, image }) {
  return (
    <div className="flex justify-center p-4">
      <div className={`w-[750px] h-[500px] flex flex-col bg-purple rounded-2xl border gap-5`}>
        <div className="flex flex-col justify-between h-full p-6">
          <h1 className="mb-2 font-sm text-white flex justify-end">{date}</h1>
          <p className="text-xl pb-2">{location}</p>
        </div>
      </div>
    </div>
  )
}