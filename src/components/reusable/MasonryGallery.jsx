"use client";

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryGallery({ images }) {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry columnsCount={3} className='flex justify-between items-center overflow-hidden h-[80vh] space-x-2 space-y-2'>
                {images && images.map((item, index) => <img key={index} src={item} />)}
            </Masonry>
        </ResponsiveMasonry>
    )
}
