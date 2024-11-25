export default function AddTodoForm() {
  return (
    <form>
        <h2 className="font-medium text-[#38220f]">Add to do</h2>
        <input type="text" className="h-[45px] border bg-[#ece0d1] border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[15px]"/>
        <button type="submit" className="h-[45px] bg-[#634832] text-[#ece0d1] hover:bg-[#38220f] w-full rounded-[5px] cursor-pointer"> Add to list</button>
    </form>
  )
}
