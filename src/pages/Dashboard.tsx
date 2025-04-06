import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreatContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/SideBar";
import { useContext } from "../hooks/useContext";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const contents = useContext();
  console.log(contents);

  return (
    <>
      <SideBar />
      <div className="p-4 ml-72 bg-gray-100 min-h-screen border-2">
        <CreatContentModal
          open={modalOpen}
          close={() => {
            setModalOpen(false);
          }}
        />
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
            onClick={() => {
              setModalOpen((prev) => !prev);
            }}
          />
        </div>

        <div className="flex flex-wrap"> 
          {contents?.map(({ type, link, title }) => (
            <Card type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
};
