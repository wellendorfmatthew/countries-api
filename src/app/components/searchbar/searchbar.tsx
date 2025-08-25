import { BiSearchAlt2 } from "react-icons/bi"

export default function SearchBar() {
    return (
        <div className="flex items-center justify-center gap-6 w-1/4 py-6 px-2 shadow-md rounded-2xl border-slate-200/50 bg-slate-50">
            <BiSearchAlt2 size={24} style={{color: "#94a3b8"}} />
            <input type="text" placeholder="Search for a country..." className="outline-none w-4/5" />
        </div>
    )
}