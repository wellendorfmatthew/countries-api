"use client"

import Image from "next/image";
import Header from "./components/header/header";
import SearchBar from "./components/searchbar/searchbar";
import Filter from "./components/filter/filter";
import React, { useState, useEffect } from "react";
import { defineFields, getCountries, getCountriesByRegion } from "@yusifaliyevpro/countries";
import { CountryPicker, Region } from "@yusifaliyevpro/countries/types";

export const countryFields = defineFields(["name", "capital", "population", "region", "flags"]);

export default function Home() {
  const [countryList, setCountryList] = useState<CountryPicker<typeof countryFields>[] | null>(null);
  const [allCountriesList, setAllCountriesList] = useState<CountryPicker<typeof countryFields>[] | null>(null);

  useEffect(() => {
    const fetchAllCountries = async() => {
      const countries = await getCountries({
        fields: ["name", "capital", "population", "region", "flags"]
      });

      const countriesList = countries;

      if (countriesList !== null) {
        setAllCountriesList(countriesList);
        setCountryList(countriesList);
      }

      // countries?.forEach((country) => {
      //   console.log(country);
      // })

      return countries;
    }

    const countries = fetchAllCountries();

    console.log(countries);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col gap-8">
      <Header />
      <div className="flex items-center justify-between px-8">
        <SearchBar setCountries={setCountryList} allCountries={allCountriesList} />
        <Filter setCountries={setCountryList} allCountries={allCountriesList} />
      </div>
      <div className="grid grid-cols-1 gap-8 px-8 pb-8 w-full 2xl:grid-cols-5 xl:gap-16 lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2">
        {
          countryList?.map((country) => (
            <div className="flex flex-col bg-header rounded-2xl border-border shadow-md max-w-80 max-[500px]:w-full" key={country.name.common}>
              <div className="w-full h-36 relative">
                <Image src={country.flags.png} alt={country.name.common} fill={true} className="rounded-t-2xl" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-center p-4">
                <p className="text-xl font-bold">{country.name.common}</p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-lg font-semibold">Population: <span className="font-normal">{country.population}</span></p>
                  <p className="text-lg font-semibold">Region: <span className="font-normal">{country.region}</span></p>
                  <p className="text-lg font-semibold">Capital: <span className="font-normal">{country.capital}</span></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
