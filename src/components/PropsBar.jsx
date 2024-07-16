import bars from "@assets/bars.svg"
import clock from "@assets/clock.svg"
import mousePointer from "@assets/mousePointer.svg"
import shield from "@assets/shield.svg"
import Image from "next/image"
import Props from "./reusable/Props"

export default function PropsBar() {
  return (
    <div className="flex justify-around">
      <Props icon={mousePointer} text={"Instant online purchase"}/>
      <Props icon={shield} text={"Secure Purchase"}/>
      <Props icon={bars} text={"Compare costs and coverages"}/>
      <Props icon={clock} text={"Available 24/7"}/>
    </div>
  )
}

