"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;