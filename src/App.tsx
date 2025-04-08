"use client"

import { useEffect } from "react"
import { Layout, BackTop } from "antd"
import { useTheme } from "./contexts/ThemeContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        document.documentElement.classList.remove("light-theme", "dark-theme")
        document.documentElement.classList.add(`${theme}-theme`)
    }, [theme])

    return (
        <Layout
            className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
        >
            <Header />
            <Layout.Content className="px-4 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </Layout.Content>
            <Footer />
            <BackTop />
        </Layout>
    )
}

export default App

