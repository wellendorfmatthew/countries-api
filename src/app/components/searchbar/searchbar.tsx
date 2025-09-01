import { BiSearchAlt2 } from "react-icons/bi"
import { CountryPicker } from "@yusifaliyevpro/countries/types"
import { ChangeEvent, SetStateAction, useState } from "react"


type SearchbarProps = {
    setCountries: React.Dispatch<React.SetStateAction<CountryPicker<readonly ["name", "capital", "population", "region", "flags"]>[] | null>>,
    allCountries: CountryPicker<readonly ["name", "capital", "population", "region", "flags"]>[] | null
}

export default function SearchBar({setCountries, allCountries}: SearchbarProps) {
    const [search, setSearch] = useState("");

    const handleCountries = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        const searchedCountry = event.target.value;

        const searchedCountries = allCountries?.filter((country) => country.name.common.toLowerCase().substring(0, searchedCountry.length) === searchedCountry.toLowerCase()) || null;
        setCountries(searchedCountries);
    }

    return (
        <div className="flex items-center justify-center gap-6 w-1/4 py-6 px-2 shadow-md rounded-2xl border-border bg-header">
            <BiSearchAlt2 size={24} style={{color: "#94a3b8"}} />
            <input type="text" placeholder="Search for a country..." value={search} className="outline-none w-4/5"  onChange={handleCountries} />
        </div>
    )
}