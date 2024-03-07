import React from "react";

import AddTodo from "./AddTodo";
import Todos from "./Todos";

function TodoList() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#F2D9EB] border-[1px] border-[#3B002B] rounded-[20px] shadow-[5px_6px_0px_0px] shadow-[#A8007B]">
      <AddTodo />
      <div className="w-full">
        <Todos />
      </div>
    </div>
  );
}

export default TodoList;
