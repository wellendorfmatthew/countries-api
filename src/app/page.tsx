"use client"

import Image from "next/image";
import Header from "./components/header/header";
import SearchBar from "./components/searchbar/searchbar";
import Filter from "./components/filter/filter";
import React, { useState } from "react";
import { useEffect } from "react";
import { defineFields, getCountries, getCountriesByRegion } from "@yusifaliyevpro/countries";
import { CountryPicker, Region, Country } from "@yusifaliyevpro/countries/types";

export const countryFields = defineFields(["name", "capital", "population", "region", "flags"]);

export default function Home() {
  const [countryList, setCountryList] = useState<CountryPicker<typeof countryFields>[] | null>([]);

  const getRegionalCountries = (region: Region) => {

  }

  useEffect(() => {
    const fetchAllCountries = async() => {
      const countries = await getCountries({
        fields: ["name", "capital", "population", "region", "flags"]
      });

      const countriesList = countries?.filter((country) => country.region === "Africa");

      if (countriesList !== undefined) {
        setCountryList(countriesList);
      }

      // countries?.forEach((country) => {
      //   console.log(country);
      // })

      return countries;
    }

    const fetchAmericanCountries = async() => {
      const americanCountries = await getCountriesByRegion({
        region: "Americas",
      });

      return americanCountries;
    }

    const countries = fetchAllCountries();
    const americanCountries = fetchAmericanCountries();

    console.log(countries);
    console.log(americanCountries);
  }, []);

  return (
    <div className="h-dvh w-dvw bg-slate-200/50 flex flex-col gap-8">
      <Header />
      <div className="flex items-center justify-between px-8">
        <SearchBar />
        <Filter />
      </div>
      <div className="grid grid-cols-4 gap-16 w-dvw h-dvh px-8">
        {
          countryList?.map((country) => (
            <div className="flex flex-col items-center justify-center py-8 bg-slate-50 rounded-2xl border-slate-200/50 shadow-md" key={country.name.common}>
              <Image src={country.flags.png} alt={country.name.common} width={200} height={150} className="rounded-2xl"/>
              <div className="flex flex-col gap-4 items-center justify-center py-4">
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
