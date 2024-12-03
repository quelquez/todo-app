export default function DeleteButton({id, handleDeleteTodo}) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
