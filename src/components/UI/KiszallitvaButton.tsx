import { MdOutlineDeliveryDining } from "react-icons/md"

export default function KiszallitvaButton({ onClick, buttontxt }:any) {
  return (
    <button onClick={onClick} className="flex flex-nowrap justify-center items-center gap-2 px-2 py-1 rounded-md bg-green-700 hover:bg-green-900 text-white hover:shadow-box cursor-pointer transition-all max-w-fit">
      <MdOutlineDeliveryDining className="w-5 h-5 "/>
      {buttontxt}
    </button>
    
  )
}
