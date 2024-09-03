import Image from "next/image";

export default function GalleryCard({ content }) {
  return (
    <div className="flex justify-center p-4">
      <div className={`w-[750px] h-[500px] flex flex-col bg-purple rounded-2xl border gap-5`}>
        <Image src={content.image} />
        <div className="flex flex-col justify-between h-full p-6">
          <h1 className="mb-2 font-sm text-white flex justify-end">{content.date}</h1>
          <p className="text-xl pb-2">{content.location}</p>
        </div>
      </div>
    </div>
  )
}