
export default function PodcastCard({title, description, url}) {
  return (
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-400 bg-opacity-40 p-6 rounded-lg">
        <iframe 
            class="w-full h-40 rounded mb-6" 
            src={url}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <h2 class="text-lg text-black font-medium title-font mb-4">{title.length >= 50 ? title.substring(0, 50) + '...' : title}</h2>
        <p class="leading-relaxed text-base">{description.length >= 65 ? description.substring(0, 55) + '...' : description}</p>
        </div>
        </div>
  )
}



