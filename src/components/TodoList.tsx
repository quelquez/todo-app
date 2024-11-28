import DeleteButton from "./DeleteButton";

export default function TodoList({todos, setTodos}) {
  
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={"flex justify-between items-center px-8 h-[60px] text-[18px] cursor-pointer border-b border-black/[8%]"}
          onClick={() => {
            setTodos(todos.map((t) => {
                if (t.id === todo.id){
                  return { ...t, isCompleted: !t.isCompleted};
                }
                return t;
              })
            );
          }}
        >
          <span className={`${todo.isCompleted ? "line-through text-[#967259]" : " "} `}
          >
            {todo.text}{" "}
          </span>

          <DeleteButton id={todo.id} setTodos={setTodos}/>
         
        </li>
      ))}
    </ul>
  );
}
