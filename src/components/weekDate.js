import React from "react";

function WeekDate() {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDayIndex = new Date().getDay(); 
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); 
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="flex flex-row bg-[#F2D9EB] border-[1px] border-[#3B002B] rounded-[20px] shadow-[5px_6px_0px_0px] shadow-[#A8007B]">
      <div className="py-[8px] px-[6px]">
        {daysOfWeek.map((day, index) => (
          <div key={`${day}-${index}`} className={`inline-flex px-[6px]`}>
            {index === currentDayIndex ? (
              <span className="text-[14px] text-[#3B002B] font-[Wellfleet] underline">
                {day}
              </span>
            ) : (
              <span className="text-[14px] text-[#3B002B] font-[Wellfleet]">
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-[1px] h-[40px] bg-[#3B002B]"></div>
      <div className="flex items-center px-5 gap-x-2">
        <p className="text-[14px] text-[#3B002B] font-[Wellfleet]"> Date: </p>
        <p className="text-[14px] text-[#3B002B] font-[Wellfleet]">{formattedDate}</p>
      </div>
    </div>
  );
}

export default WeekDate;
