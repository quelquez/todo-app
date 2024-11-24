function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-[#967259] min-h-screen flex-col">
      <h1 className="text-[120px] font-bold text-[#38220f]/10 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2em]">Todo list</h1> 

      <main className="relative w-[972px] h-[636px] bg-[#dbc1ac] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2] bg-[#ece0d1] border-b border-[#38220f]/[0.08]"></header>

        <ul></ul>

        <section className="col-[2/3] row-[2/3] bg-[#d6b4988a] border-l border-[#38220f]/[0.08]"></section>

      </main>

      <footer className="flex justify-between w-[972px] text-[#38220f] items-center text-[11px] opacity-50 mt-[12px]">
        <small className="text-[11px]"> &copy; 2024 | Maria</small>
        <p>Version <b>0.1</b></p>
      </footer>
    </div>
  );
}

export default App
