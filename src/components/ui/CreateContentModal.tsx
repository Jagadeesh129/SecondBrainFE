import { useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BackendURL } from "../../config";
import axios from "axios";

interface modalProps {
  open?: boolean;
  close?: any;
}

export const CreatContentModal = (props: modalProps) => {
  const titleRef = useRef<any>("");
  const linkRef = useRef<any>("");
  const typeRef = useRef<any>("");

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = typeRef.current?.value;
    await axios.post(
      BackendURL + "/api/v1/content",
      {
        title,
        type,
        link,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
  }

  return (
    <>
      {props.open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white p-4 rounded opacity-100">
              <div className="flex justify-end cursor-pointer">
                <div onClick={props.close}>
                  <CrossIcon />
                </div>
              </div>
              <div className="">
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder={"link"} />
                <Input reference={typeRef} placeholder={"type"} />
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={addContent}
                  variant="primary"
                  text="submit"
                ></Button>
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
