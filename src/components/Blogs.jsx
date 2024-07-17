import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import RecentBlogsCard from "./reusable/RecentBlogsCard"
import filler from '@assets/fillerImg.svg'

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Blogs() {
  return (
    <div>
        <div className="absolute inset-20 z-10">
            <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>BLOG</h1>
        </div>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#516470"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#b4bec0"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#516470"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#b4bec0"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#516470"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#b4bec0"}/>
    </div>
  )
}
