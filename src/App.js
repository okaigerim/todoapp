import React from "react";

import Header from "./components/Header";
import WeekDate from "./components/weekDate";
import Agenda from "./components/Agenda";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import Mood from "./components/Mood";

function App() {
  return (
    <div className="App">
      <div className="w-[100vw] h-[100vh] bg-[#ECECEC]">
        <div className="bg-[#ECECEC] w-full">
          <div className="h-[50px]"></div>
          <div className="w-[60%] h-full mx-auto border-[7px] border-[#333] rounded-[28px] flex flex-col">
            <div className="mx-auto py-5">
              <Header />
              <WeekDate />
            </div>
            <div className="w-full flex flex-row">
              <div className="w-[50%] m-[20px]">
                <Agenda />
              </div>
              <div className="w-[50%] m-[20px] flex flex-col gap-y-[20px]">
                <h2 className="inline-block px-3 mx-auto text-center uppercase text-[#fff] font-[Wellfleet] bg-[#A8007B] rounded-[28px]">
                  ToDo List
                </h2>
                <TodoList />
                <div className="flex flex-col justify-end h-full gap-y-[20px]">
                  <Quote />
                  <Mood />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
