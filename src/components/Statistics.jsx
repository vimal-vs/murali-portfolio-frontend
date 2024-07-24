"use client"

import StatsCard from './reusable/StatsCard'
import iconHeart from '../assets/heart.svg'
import iconStar from '../assets/star.svg'
import iconTri from '../assets/triangle.svg'
import { useCommonContext } from '@contexts/CommonContext';

export default function Statistics() {
    const statsData = useCommonContext()?.data?.landing;
    return (
        <>
            <div className='w-full flex flex-col md:hidden gap-10 px-8 mt-20'>
                <div className="w-full flex gap-10 justify-around">
                    <StatsCard icon={iconHeart} content={statsData?.stat1content} stats={statsData?.stat1} />
                    <StatsCard icon={iconStar} content={statsData?.stat2content} stats={statsData?.stat2} />
                </div>
                <StatsCard marginLeft icon={iconTri} content={statsData?.stat3content} stats={statsData?.stat3} />
            </div>
            <div className="hidden md:flex flex-col md:flex-row justify-around mt-32">
                <StatsCard icon={iconHeart} content={statsData?.stat1content} stats={statsData?.stat1} />
                <StatsCard icon={iconStar} content={statsData?.stat2content} stats={statsData?.stat2} />
                <StatsCard marginLeft icon={iconTri} content={statsData?.stat3content} stats={statsData?.stat3} />
            </div>
        </>
    )
}
