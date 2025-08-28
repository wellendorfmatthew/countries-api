import { CountryPicker, Region } from "@yusifaliyevpro/countries/types"
import React from "react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"

type FilterProps = {
    setCountries: React.Dispatch<React.SetStateAction<CountryPicker<readonly ["name", "capital", "population", "region", "flags"]>[] | null>>,
    allCountries: CountryPicker<readonly ["name", "capital", "population", "region", "flags"]>[] | null
}

export default function Filter({ setCountries, allCountries }: FilterProps) {
    const [isClicked, setIsClicked] = useState(false);

    const getRegionalCountries = (region: Region) => {
        const regionalCountries = allCountries?.filter((country) => country.region === region) || null;
        setCountries(regionalCountries);
    }

    return (
        <div className="flex items-center justify-between p-4 w-52 border-slate-200/50 shadow-md rounded-2xl bg-slate-50 relative" onClick={() => setIsClicked(!isClicked)}>
            <p className="font-medium">Filter by Region</p>
            <BiSolidChevronDown size={20} className={`cursor-pointer transition duration-200 ${isClicked ? "-rotate-180" : "rotate-0"}`} />
            {isClicked && (
                <div className="absolute top-full right-0 mt-2 bg-slate-50 w-full z-30 border-slate-200/50 shadow-md rounded-2xl">
                    <div className="flex flex-col items-start justify-start w-full h-full p-4 gap-2">
                        <p className="font-medium cursor-pointer transition hover:font-semibold duration-300" onClick={() => getRegionalCountries("Africa")}>Africa</p>
                        <p className="font-medium cursor-pointer transition hover:font-semibold duration-300" onClick={() => getRegionalCountries("Americas")}>Americas</p>
                        <p className="font-medium cursor-pointer transition hover:font-semibold duration-300" onClick={() => getRegionalCountries("Asia")}>Asia</p>
                        <p className="font-medium cursor-pointer transition hover:font-semibold duration-300" onClick={() => getRegionalCountries("Europe")}>Europe</p>
                        <p className="font-medium cursor-pointer transition hover:font-semibold duration-300" onClick={() => getRegionalCountries("Oceania")}>Oceania</p>
                    </div>
                </div>
            )}
        </div>
    )
}