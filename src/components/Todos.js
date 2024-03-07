import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../features/todo/todoSlice";

import { closeIcon } from "../assets";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="px-5 pb-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-[40px] pb-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="w-[20px] h-[20px] bg-[#F6E6F2] border-[1px] focus:outline-none rounded-[4px]"
            >
              <img src={closeIcon} alt="closeIcon" />
            </button>
            <span className="w-full border-b-2 border-[rgba(0, 0, 0, 0.46)] text-[14px] text-[#3B002B] font-[Wellfleet]">
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todos;
