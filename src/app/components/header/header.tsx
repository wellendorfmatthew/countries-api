"use client"

import { BiMoon } from "react-icons/bi"
import { BiWorld } from "react-icons/bi"
import { BiSun } from "react-icons/bi"
import React, { useEffect } from "react"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    
    }
    return (
        <header className="w-full flex items-center justify-between border-b p-8 border-border shadow-md bg-background text-foreground">
            <div className="flex items-center justify-center gap-2">
                <BiWorld size={36} />
                <h1 className="font-bold text-2xl">Doko</h1>
            </div>
            {theme === "dark" ? (
                <button className="flex items-center justify-center gap-2" onClick={() => setTheme("light")}>
                    <BiMoon size={24} />
                </button>
            ):  (<button className="flex items-center justify-center gap-2" onClick={() => setTheme("dark")}>
                    <BiSun size={24} />
                </button>
            )}
        </header>
    )
}