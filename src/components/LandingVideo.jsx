
export default function LandingVideo( {embedId} ) {
  return (
    <div className="flex justify-center p-10 aspect-w-16 aspect-h-9">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/WGvtr4SPGpw?si=7ktQKc03n6e-sfFm" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
      </iframe>
    </div>
  )
}
