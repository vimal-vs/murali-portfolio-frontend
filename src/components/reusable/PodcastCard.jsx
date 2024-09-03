import { motion } from "framer-motion"
import { FaShareAlt } from "react-icons/fa"

export default function PodcastCard({ title, description, url }) {

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };

  return (
    <motion.div
      className="w-full p-4"
    >
      <div className="bg-purple rounded-lg shadow-lg h-[500px] flex flex-col justify-between">
        <iframe
          className="w-full h-[400px]"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="px-6 pt-4 h-[100px]">
          <h2 className="text-xl text-white font-semibold mb-2 truncate-line">{title}</h2>
          <p className="text-white text-sm mb-4 truncate-line-1">{description}</p>
        </div>
        <div className="flex justify-end items-end mr-6 mb-6 relative">
          <button
            onClick={handleShare}
            className="group text-xl text-yellow hover:text-white transition-colors duration-300 relative"
          >
            <span className="absolute -left-14 top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm z-20">
              Share
            </span>
            <FaShareAlt />
          </button>
        </div>
      </div>
    </motion.div>
  )
}