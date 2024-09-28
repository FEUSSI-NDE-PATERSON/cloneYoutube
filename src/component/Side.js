import { AccountBalance } from "@mui/icons-material";
import React, { useEffect } from "react";

const Side = ({ sideba, selected, setSelected }) => {
  useEffect(() => {}, [selected]);
  return (
    <div className="mt-[25px]  gap-5 flex flex-col ">
      {sideba.map((sid) => (
        <div
          id={sid.name}
          className={`flex p-3  item-center rounded-full  w-[fit-content] cursor-pointer ${
            selected === sid.name ? "bg-[tomato]" : "bg-transparent"
          }`}
          onClick={() => setSelected(sid.name)}
        >
          <AccountBalance
            className={`mr-5 ${
              selected === sid.name ? "text-black" : "text-white-500"
            }`}
          />
          <p
            className={`hidden sm:block  text-nowrap text-[12px] ${
              selected === sid.name ? "text-black" : "text-white"
            }`}
          >
            {sid.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Side;
