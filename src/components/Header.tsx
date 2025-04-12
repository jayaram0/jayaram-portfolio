"use client"

import { useState, useEffect } from "react"
import { Layout, Menu, Button, Drawer } from "antd"
import { MenuOutlined, MoonFilled, SunFilled } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const menuItems = [
    { key: "about", label: "About" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setVisible(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <Layout.Header
          className={`fixed w-full z-10 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
              scrolled
                  ? `${theme === "dark" ? "bg-gray-900/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md shadow-md"}`
                  : `${theme === "dark" ? "bg-transparent" : "bg-transparent"}`
          }`}
          style={{ padding: "0 20px", height: "64px" }}
      >
        <div className="flex items-center">
          <h1 className="text-xl font-bold m-0">
            <a href="#" className={`${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Jayaram Kinthali
            </a>
          </h1>
        </div>

        {/* Desktop Menu - Only shown on desktop */}
        {!isMobile && (
            <div className="flex items-center">
              <Menu
                  mode="horizontal"
                  className={`border-0 ${theme === "dark" ? "bg-transparent text-white" : "bg-transparent"}`}
                  selectedKeys={[]}
                  style={{ lineHeight: "64px" }}
              >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} onClick={() => scrollToSection(item.key)}>
                      {item.label}
                    </Menu.Item>
                ))}
              </Menu>
              <Button
                  type="text"
                  icon={
                    theme === "dark" ? <SunFilled className="text-yellow-400" /> : <MoonFilled className="text-gray-600" />
                  }
                  onClick={toggleTheme}
                  className="ml-4"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              />
            </div>
        )}

        {/* Mobile Menu - Only shown on mobile */}
        {isMobile && (
            <div className="flex">
              <Button
                  type="text"
                  icon={
                    theme === "dark" ? <SunFilled className="text-yellow-400" /> : <MoonFilled className="text-gray-600" />
                  }
                  onClick={toggleTheme}
                  className="mr-2"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              />
              <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setVisible(true)}
                  className={theme === "dark" ? "text-white" : "text-gray-800"}
                  aria-label="Open menu"
              />
            </div>
        )}

        <Drawer
            title="Menu"
            placement="right"
            onClose={() => setVisible(false)}
            open={visible}
            className={theme === "dark" ? "bg-gray-800 text-white" : ""}
        >
          <Menu mode="vertical" className={theme === "dark" ? "bg-gray-800 text-white border-0" : "border-0"}>
            {menuItems.map((item) => (
                <Menu.Item key={item.key} onClick={() => scrollToSection(item.key)}>
                  {item.label}
                </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Layout.Header>
  )
}

export default Header
