"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "antd"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            type="text"
            icon={theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center"
            aria-label="Toggle theme"
        />
    )
}

