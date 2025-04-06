import { ShareIcon } from "../../icons/ShareIcon";

interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = (props: cardProps) => {
  return (
    <div className="bg-white rounded-md p-4 max-w-72 border m-1 border-slate-900 min-h-48 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-md">
          <div className="text-gray-500">
            <ShareIcon />
          </div>
          Project Ideas
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-gray-500">
            <a href={props.link} target="_blank">
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>
      {props.type == "youtube" ? (
        <div className="pt-4">
          <iframe
            className="w-full h-full"
            src={props.link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      ) : (
        <div className="">
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      )}
    </div>
  );
};
