import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="flex justify-center items-center font-sans bg-[#967259] min-h-screen flex-col">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-[#dbc1ac] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Sidebar todos={todos} setTodos={setTodos}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
