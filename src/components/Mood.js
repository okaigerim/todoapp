import React, { useState } from "react";

import {
  moodAActiveIcon,
  moodADefaultIcon,
  moodBActiveIcon,
  moodBDefaultIcon,
  moodCActiveIcon,
  moodCDefaultIcon,
  moodDActiveIcon,
  moodDDefaultIcon,
  moodEActiveIcon,
  moodEDefaultIcon,
} from "../assets";

function Mood() {
  const [activeMood, setActiveMood] = useState(null);

  const handleMoodChange = (mood) => {
    if (activeMood === mood) {
      setActiveMood(null);
    } else {
      setActiveMood(mood);
    }
  };

  return (
    <div className="h-[60px] flex flex-col bg-[#F2D9EB] border-[1px] border-[#3B002B] rounded-[20px] shadow-[5px_6px_0px_0px] shadow-[#A8007B]">
      <h1 className="text-center font-[Wellfleet] mb-1">MOOD</h1>
      <div className="flex justify-around">
        <div onClick={() => handleMoodChange("MoodA")}>
          <img
            src={activeMood === "MoodA" ? moodAActiveIcon : moodADefaultIcon}
            alt="Mood A"
          />
        </div>
        <div onClick={() => handleMoodChange("MoodB")}>
          <img
            src={activeMood === "MoodB" ? moodBActiveIcon : moodBDefaultIcon}
            alt="Mood B"
          />
        </div>
        <div onClick={() => handleMoodChange("MoodC")}>
          <img
            src={activeMood === "MoodC" ? moodCActiveIcon : moodCDefaultIcon}
            alt="Mood C"
          />
        </div>
        <div onClick={() => handleMoodChange("MoodD")}>
          <img
            src={activeMood === "MoodD" ? moodDActiveIcon : moodDDefaultIcon}
            alt="Mood D"
          />
        </div>
        <div onClick={() => handleMoodChange("MoodE")}>
          <img
            src={activeMood === "MoodE" ? moodEActiveIcon : moodEDefaultIcon}
            alt="Mood E"
          />
        </div>
      </div>
    </div>
  );
}

export default Mood;
