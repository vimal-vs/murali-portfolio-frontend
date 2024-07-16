import RecentBlogsCard from "@components/reusable/RecentBlogsCard";
import filler from '@assets/fillerImg.svg'

export default function RecentBlogs() {
  return (
    <div className="gap-2">
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#516470"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#b4bec0"}/>
        <RecentBlogsCard thumbnail = {filler} title={"Title Goes Here"} content ={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis veritatis repellendus illum quo consequuntur fugit aperiam. Reprehenderit veritatis inventore voluptatum fugiat tempora tenetur repellat! Cum consequatur doloremque et quia ex?"} bgColor = {"#516470"}/>
    </div>
  )
}
