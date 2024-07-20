"use client"

import Marquee from "react-fast-marquee";
import TestimonialCard from "./reusable/TestimonialCard";
import Seperator from "./reusable/Separator";
import { useState, useEffect } from "react";
import { getAllTestimonials } from "@actions/testimonials";

export default function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
          const data = await getAllTestimonials();
          console.log(data)
          setTestimonials(data)
        } 
        fetchData()
      },[])

    return (
        <div>
            <Seperator text={"Customer Testimonials"} bgColor={"#fff"} />
            <Marquee
                pauseOnHover
                pauseOnClick
                speed={40}
            >
                {testimonials?.map((item, index) =>
                    <div className="ml-6">
                        <TestimonialCard key={index} name={item.name} designation={item.designation} content={item.content} />
                    </div>
                )}
            </Marquee>
        </div>
    )
}
