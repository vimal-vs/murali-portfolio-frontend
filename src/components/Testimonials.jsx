import Marquee from "react-fast-marquee";
import TestimonialCard from "./reusable/TestimonialCard";
import Seperator from "./reusable/Seperator";

export default function Testimonials() {
    const data = [
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
        {
            name: "John Doe",
            designation: "Student",
            content: "asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !!"
        },
    ];

    return (
        <div>
            <Seperator text={"Customer Testimonials"} bgColor={"#fff"} />
            <Marquee
                pauseOnHover
                pauseOnClick
                speed={40}
            >
                {data.map((item, index) =>
                    <div className="ml-6">
                        <TestimonialCard key={index} name={item.name} designation={item.designation} content={item.content} />
                    </div>
                )}
            </Marquee>
        </div>
    )
}
