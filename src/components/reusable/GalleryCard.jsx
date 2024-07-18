import MasonryGallery from "./MasonryGallery";


export default function GalleryCard() {
  return (
    <div className="flex justify-center p-4">
        <div className="w-[750px] h-[500px] flex flex-col bg-purple rounded-2xl border gap-5">
            <div className='flex flex-col justify-between h-full p-6'>
                <h1 className="mb-2 font-sm text-white flex justify-end">hi</h1>
                <p className="font-medium text-yellow pb-4">hi</p>
            </div>
        </div> 
    </div>
  )
}
