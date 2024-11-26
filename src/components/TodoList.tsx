import DeleteButton from "./DeleteButton";

const initialTodos = [
  {
    text: "Example1",
    isCompleted:false,
  },
  {
    text: "Example2",
    isCompleted:true,
  },
  {
    text: "Example3",
    isCompleted:false,
  },
];
export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[80px] text-[18px] cursor-pointer border-b border-black/[8%]"
        >
          <span className={`${todo.isCompleted ? 'line-through text-[#967259]' : " "} `}>{todo.text } </span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
