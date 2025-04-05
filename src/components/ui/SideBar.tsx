import { Logo } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SideBatItem } from "./SideBarItem"


export const SideBar = () => {
    return <div className="h-screen bg-white border-r w-76 fixed left-0 right-0">
        <div className="text-2xl font-bold m-2"><h1 className="flex items-center gap-2"><Logo />Brainly</h1></div>
       <SideBatItem text="Twitter" icon={<TwitterIcon/>} />
       <SideBatItem text="Youtube" icon={<YoutubeIcon/>} />
    </div>
}