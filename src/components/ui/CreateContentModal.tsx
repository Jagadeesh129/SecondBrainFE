import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BackendURL } from "../../config";
import axios from "axios";

interface modalProps {
  open?: boolean;
  close?: any;
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export const CreatContentModal = (props: modalProps) => {
  const titleRef = useRef<any>("");
  const linkRef = useRef<any>("");
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
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
    props.close();
  }

  return (
    <>
      {props.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Modal Content */}
          <div className="relative bg-white p-4 rounded z-50 min-w-[300px]">
            <div className="flex justify-end">
              <div className="cursor-pointer" onClick={props.close}>
                <CrossIcon />
              </div>
            </div>
            <div>
              <Input reference={titleRef} placeholder="Title" />
              <Input reference={linkRef} placeholder="Link" />
            </div>
            <div>
              <h1>Type</h1>
              <div className="flex gap-1 justify-center pb-2">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button onClick={addContent} variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
