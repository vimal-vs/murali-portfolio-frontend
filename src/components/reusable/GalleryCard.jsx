import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaInfoCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Modal, Button } from 'antd';
import { useState } from "react";

export default function GalleryCard({ content }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const reverseDate = (dateString) => {
    const parts = dateString.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentImageIndex(0);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? content.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === content.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      className="w-full h-[99%] flex flex-col bg-purple rounded-2xl transition-all duration-300"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleModal}
    >
      <Image
        src={content.imageUrls[0]}
        alt={content.title}
        width={750}
        height={500}
        className="object-cover w-full h-[350px] rounded-t-2xl"
      />
      <div className="flex flex-col justify-between h-full px-6 py-4 text-white space-y-3">

        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold">{content.title}</h2>
          <FaInfoCircle className="text-white text-lg hidden md:block" title="Event Info" />
        </div>

        <motion.p
          className="text-sm md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {content.description}
        </motion.p>

        <div className="flex items-center justify-end space-x-2">
          <FaCalendarAlt className="text-white text-lg" />
          <motion.h1
            className="text-sm"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {reverseDate(content.date)}
          </motion.h1>
        </div>
      </div>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        centered
        footer={null}
        width="90vw"
        style={{ top: 0, padding: 0, marginTop: 50 }}
        bodyStyle={{ padding: 0, height: '80vh' }}
        closeIcon={
          <Button
            className="absolute top-2 right-2 border-none text-black bg-white/70 p-3 rounded-full text-xl"
            onClick={handleCancel}
          >
            X
          </Button>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <button onClick={showPrevImage} className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2">
            <FaChevronLeft className="text-white text-3xl" />
          </button>
          <Image
            src={content.imageUrls[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
          <button onClick={showNextImage} className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2">
            <FaChevronRight className="text-white text-3xl" />
          </button>
        </div>
      </Modal>
    </motion.div>
  );
}