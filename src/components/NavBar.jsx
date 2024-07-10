

export default function NavBar() {
  return (
    <div className="flex justify-end bg-contain fixed" >
        <div className="text-black font-bold text-2xl">
            <button type="button" className="px-7 py-4">Downloads</button>
            <button type="button" className="px-7 py-4">Podcasts</button>
            <button type="button" className="px-7 py-4">Gallery</button>
        </div> 
    </div> 
  )
}
