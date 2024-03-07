import React from "react";

import { quoteIcon } from "../assets";

function getRandomQuote() {
  const randomQuotes = [
    {
      id: 1,
      author: "Vince Lombardi",
      text: "The only place where success comes before work is in the dictionary.",
    },
    {
      id: 2,
      author: "Zig Ziglar",
      text: "You don't have to be great to start, but you have to start to be great.",
    },
    {
      id: 3,
      author: "Maya Angelou",
      text: "Success is liking yourself, liking what you do, and liking how you do it.",
    },
    {
      id: 4,
      author: "Winston S. Churchill",
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
    },
    {
      id: 5,
      author: "Albert Schweitzer",
      text: "Success is not the key to happiness. Happiness is the key to success.",
    },
    {
      id: 6,
      author: "Michael Jordan",
      text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    },
    {
      id: 7,
      author: "Helen Keller",
      text: "Character cannot be developed in ease and quiet. ",
    },
    {
      id: 8,
      author: "Thomas Edison",
      text: "I have not failed. I've just found 10,000 ways that won't work.",
    },
    {
      id: 9,
      author: "Oprah Winfrey",
      text: "The biggest adventure you can take is to live the life of your dreams.",
    },
    {
      id: 10,
      author: "Napoleon Hill",
      text: "Whatever the mind can conceive and believe, it can achieve.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * randomQuotes.length);
  
  return randomQuotes[randomIndex];
}

function Quote() {
  const randomQuote = getRandomQuote();

  return (
    <div className="h-[150px] flex flex-col bg-[#F2D9EB] border-[1px] border-[#3B002B] rounded-[20px] shadow-[5px_6px_0px_0px] shadow-[#A8007B] overflow-hidden">
      <div className="flex flex-row">
        <img src={quoteIcon} alt="quotes" className="w-[25px] h-[30px]" />
        <img src={quoteIcon} alt="quotes" className="w-[25px] h-[30px]" />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="p-4">
          <p className="text-[18px] text-[#3B002B] font-[Wellfleet]">{randomQuote.text}</p>
          <p className="text-right italic text-[14px] text-[#3B002B] font-[Wellfleet]">{randomQuote.author}</p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
