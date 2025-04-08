"use client"

import { useState, useEffect } from "react"
import { Layout, Menu, Button, Drawer } from "antd"
import { MenuOutlined, BulbOutlined, BulbFilled } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
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
          icon={theme === "dark" ? <BulbFilled /> : <BulbOutlined />}
          onClick={toggleTheme}
          className={`ml-4 ${theme === "dark" ? "text-yellow-400" : "text-gray-600"}`}
        />
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <Button
          type="text"
          icon={theme === "dark" ? <BulbFilled /> : <BulbOutlined />}
          onClick={toggleTheme}
          className={`mr-2 ${theme === "dark" ? "text-yellow-400" : "text-gray-600"}`}
        />
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          className={theme === "dark" ? "text-white" : "text-gray-800"}
        />
      </div>

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

