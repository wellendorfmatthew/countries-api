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
        <div className="flex items-center justify-between p-4 w-52 border-border shadow-md rounded-2xl bg-header relative" onClick={() => setIsClicked(!isClicked)}>
            <p className="font-medium">Filter by Region</p>
            <BiSolidChevronDown size={20} className={`cursor-pointer transition duration-200 ${isClicked ? "-rotate-180" : "rotate-0"}`} />
            {isClicked && (
                <div className="absolute top-full right-0 mt-2 bg-header w-full z-30 border-border shadow-md rounded-2xl">
                    <div className="grid grid-cols-1 w-full h-full">
                        <div 
                            className="flex items-center justify-start p-4 cursor-pointer transition hover:bg-background duration-200"
                            onClick={() => getRegionalCountries("Africa")}
                        >
                            <p className="font-medium" >Africa</p>
                        </div>
                        <div 
                            className="flex items-center justify-start p-4 cursor-pointer transition hover:bg-background duration-200"
                            onClick={() => getRegionalCountries("Americas")}
                        >
                            <p className="font-medium" >Americas</p>
                        </div>
                        <div 
                            className="flex items-center justify-start p-4 cursor-pointer transition hover:bg-background duration-200"
                            onClick={() => getRegionalCountries("Asia")}
                        >
                            <p className="font-medium" >Asia</p>
                        </div>
                        <div 
                            className="flex items-center justify-start p-4 cursor-pointer transition hover:bg-background duration-200"
                            onClick={() => getRegionalCountries("Europe")}
                        >
                            <p className="font-medium" >Europe</p>
                        </div>
                        <div 
                            className="flex items-center justify-start p-4 cursor-pointer transition hover:bg-background duration-200"
                            onClick={() => getRegionalCountries("Oceania")}
                        >
                            <p className="font-medium" >Oceania</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}