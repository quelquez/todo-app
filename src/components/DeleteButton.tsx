export default function DeleteButton({id, setTodos}) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        setTodos(prev => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
}
