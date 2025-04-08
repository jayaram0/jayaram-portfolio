"use client"

import { Layout, Typography, Space, Divider } from "antd"
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"

const { Text, Link } = Typography

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <Layout.Footer
      className={`py-8 px-4 ${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-600"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Text strong className={`text-xl ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Jayaram Kinthali
            </Text>
            <Text className="block text-sm mt-1">Full Stack Developer</Text>
          </div>

          <Space size="large" className="text-2xl">
            <Link
              href="https://github.com/"
              target="_blank"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <GithubOutlined />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <LinkedinOutlined />
            </Link>
            <Link
              href="mailto:jayaram.kinthali0@gmail.com"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <MailOutlined />
            </Link>
          </Space>
        </div>

        <Divider className={theme === "dark" ? "border-gray-700" : "border-gray-300"} />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <Text className="mb-2 md:mb-0">© {currentYear} Jayaram Kinthali. All rights reserved.</Text>

          <Space
            split={<Divider type="vertical" className={theme === "dark" ? "border-gray-700" : "border-gray-300"} />}
          >
            <Link
              href="#about"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              Contact
            </Link>
          </Space>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer

