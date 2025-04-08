"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import darkTheme from "../themes/dark.json"
import lightTheme from "../themes/light.json"

type ThemeType = "light" | "dark"

interface ThemeState {
    theme: ThemeType
    toggleTheme: () => void
}

// Create a Zustand store with persist middleware
export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme:
                typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
        }),
        {
            name: "theme-storage", // unique name for localStorage key
        },
    ),
)

// Create a context for providing theme config
type ThemeContextType = {
    themeConfig: typeof lightTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = useThemeStore((state) => state.theme)
    const themeConfig = theme === "dark" ? darkTheme : lightTheme

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = (e: MediaQueryListEvent) => {
            useThemeStore.setState({ theme: e.matches ? "dark" : "light" })
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    return <ThemeContext.Provider value={{ themeConfig }}>{children}</ThemeContext.Provider>
}

// Hook to access theme config
export const useThemeConfig = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useThemeConfig must be used within a ThemeProvider")
    }
    return context
}

// Combined hook for convenience
export const useTheme = () => {
    const { theme, toggleTheme } = useThemeStore()
    const { themeConfig } = useThemeConfig()
    return { theme, themeConfig, toggleTheme }
}

