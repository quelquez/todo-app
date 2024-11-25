export default function Button({buttonType,children}) {
  return (
    <button className={`h-[45px] bg-[#634832] text-[#ece0d1] hover:bg-[#38220f] w-full rounded-[5px] cursor-pointer ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`}>
        {children}
        </button>
  )
}
