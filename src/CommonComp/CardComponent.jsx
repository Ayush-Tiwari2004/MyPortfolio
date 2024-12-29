import React from "react";
import Button from "./Button";

export const CardComponent = (props) => {

  const { id, name, img_url, parra, src, new_heading, tools_name } = props.data;

  return (
    <li>
      <div className="bg-gray-700 w-72 my-4 relative overflow-visible px-2 flex justify-center card-shadow">
        <div className="relative bg-white p-2 mb-10 top-[-18px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded flex flex-col gap-2">
          <div>
            <img src={src} className="w-10 rounded-full" alt={name} />
            <p className="text-xl font-bold text-gray-600">{name}</p>
            <p className="text-[12px]">
              {parra}
            </p>
          </div>
          
          {id === "Four-card" && (
            <div className="">
              <h3 className="text-lg font-semibold text-gray-800"> {new_heading} </h3>
              <p className="text-gray-600 text-[12px]">
                {tools_name}
              </p>
            </div>
          )}
          <img src={img_url} className="rounded " alt={name} />
        </div>


        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Button label="click me" color="black" size="large" width="full" rounded={false} />
        </div>
      </div>
    </li>
  )
}