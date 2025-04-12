"use client"

import { Button, Typography, Space } from "antd"
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

const { Title, Paragraph } = Typography

const Hero = () => {
  const { theme } = useTheme()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
      <div className="min-h-screen flex flex-col justify-center items-center pt-24 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Jayaram Kinthali"
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Full Stack Developer
            </div>
          </div>

          <Title
              level={1}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            Jayaram Kinthali
          </Title>

          <Paragraph className={`text-lg md:text-xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Experienced Full Stack Developer with expertise in Python, ReactJS, and TypeScript, passionate about building
            scalable web applications and data-driven solutions.
          </Paragraph>

          <Space size="middle" className="mb-12" wrap>
            <Button type="primary" size="large" href="#contact" className="bg-blue-500 hover:bg-blue-600 border-blue-500">
              Contact Me
            </Button>
            <Button size="large" href="#projects" className={theme === "dark" ? "border-gray-600 text-white" : ""}>
              View Projects
            </Button>
          </Space>

          <Space size={isMobile ? "middle" : "large"} className="text-2xl" wrap>
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <GithubOutlined />
            </a>
            <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <LinkedinOutlined />
            </a>
            <a
                href="mailto:jayaram.kinthali0@gmail.com"
                className={`hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              <MailOutlined />
            </a>
          </Space>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className={`text-3xl ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            ↓
          </a>
        </div>
      </div>
  )
}

export default Hero
