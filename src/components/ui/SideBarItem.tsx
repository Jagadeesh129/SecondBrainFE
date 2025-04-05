export const SideBatItem = (props:any) => {
  return (
    <div className="flex items-center bg-white shadow-md m-1">
      <div className="m-2 text-gray-600">{props.icon}</div>
      <div className="cursor-pointer"> {props.text } </div>
    </div>
  );
};
