import React from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

function Agenda() {
  const time = [
    "06 AM",
    "07 AM",
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "01 PM",
    "02 PM",
    "03 PM",
    "04 PM",
    "05 PM",
    "06 PM",
    "07 PM",
    "08 PM",
    "09 PM",
    "10 PM",
    "11 PM",
    "12 AM",
  ];

  return (
    <div className="flex flex-col bg-[#F2D9EB] border-[1px] border-[#3B002B] rounded-[20px] shadow-[5px_6px_0px_0px] shadow-[#A8007B]">
      {time.map((timeItem) => (
        <div
          key={`${timeItem}-${nanoid}`}
          className={clsx(
            timeItem === time[time.length - 1]
              ? "border-b-none"
              : "border-b-2 border-dashed border-[rgba(0, 0, 0, 0.46)]"
          )}
        >
          <span className="p-4 text-[14px] text-[#3B002B] font-[Wellfleet]">
            {timeItem}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Agenda;
