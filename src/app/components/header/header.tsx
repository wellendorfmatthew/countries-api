"use client"

import { BiMoon } from "react-icons/bi"
import { BiWorld } from "react-icons/bi"
import { BiSun } from "react-icons/bi"
import React from "react"
import { useState } from "react"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <header className="w-full flex items-center justify-between border-b p-8 border-slate-200/50 shadow-md bg-slate-50">
            <div className="flex items-center justify-center gap-2">
                <BiWorld size={36} />
                <h1 className="font-bold text-2xl">Doko</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
                {darkMode ? <BiSun size={24} onClick={() => setDarkMode(false)} /> : <BiMoon size={24} onClick={() => setDarkMode(true)} />}
                {darkMode ? <p className="text-xl">Light Mode</p> : <p className="text-xl">Dark Mode</p>}
            </div>
        </header>
    )
}