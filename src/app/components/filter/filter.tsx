import { BiSolidChevronDown } from "react-icons/bi"

export default function Filter() {
    return (
        <div className="flex items-center justify-between p-4 w-52 border-slate-200/50 shadow-md rounded-2xl bg-slate-50">
            <p>Filter by Region</p>
            <BiSolidChevronDown size={20} />
        </div>
    )
}