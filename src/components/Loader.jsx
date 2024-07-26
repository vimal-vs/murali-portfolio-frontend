"use client";

import { motion } from "framer-motion";

const Loader = () => {
    return (
        <motion.div
            className="flex justify-center items-center min-h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="loader"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
};

export default Loader;
