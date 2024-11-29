import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        setTodos( prev => [
          ...prev,
          {
            id: prev.length + 1,
            text: todoText,
            isComleted: false,
          },
        ]);
        setTodoText(""); 
      }}
    >
      <h2 className="font-medium text-[#38220f]">Add to do</h2>
      <input
        type="text"
        className="h-[45px] border bg-[#ece0d1] border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[15px]"
        value={todoText}
        onChange={(event)=>{
          setTodoText(event.target.value);
        }}
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
