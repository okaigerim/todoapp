import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

import { closeIcon } from "../assets";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <form
        onSubmit={addTodoHandler}
        className="m-3 inline-flex gap-x-[10px] "
      >
        <input
          type="text"
          className="bg-white text-[#3B002B] px-2 rounded border-none focus:outline-none transition-colors duration-200 ease-in-out"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-[20px] h-[20px] bg-[#F6E6F2] border-[1px] focus:outline-none rounded-[4px]"
        >
          <img
            src={closeIcon}
            alt="closeIcon"
            className="transform rotate-45"
          />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
