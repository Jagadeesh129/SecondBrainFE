import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreatContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/SideBar";

export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <SideBar />
    <div className="p-4 ml-72 bg-gray-100 min-h-screen border-2">
      <CreatContentModal open={modalOpen} close={() => {setModalOpen(false)}} />
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          startIcon={<ShareIcon />}
          text="Share Brain"
        />
        <Button
          variant="secondary"
          startIcon={<PlusIcon />}
          text="Add Content"
          onClick={()=>{setModalOpen((prev)=>!prev)}}
        />
      </div>

      <div className="flex">
        <Card
          title="Youtube"
          link="https://www.youtube.com/watch?v=KfF1W7GWfgo"
          type="youtube"
        />
        <Card
          title="Twitter"
          link="https://x.com/taran_adarsh/status/1908050227954606248"
          type="twitter"
        />
      </div>
      </div>
    </>
  );
}