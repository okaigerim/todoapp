import React, { useEffect, useState } from "react";

function Header() {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    setCurrentDay(dayOfWeek);
  }, []);

  return (
    <div className="px-7">
      <h1 className="text-[#3B002B] font-[Wellfleet] text-[42px] font-bold leading-[66px] uppercase">{currentDay}</h1>
    </div>
  );
}
export default Header;
