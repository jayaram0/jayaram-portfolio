"use client"

import type React from "react"

import { useState } from "react"
import { Typography, Row, Col, Card, Modal } from "antd"
import { useTheme } from "../contexts/ThemeContext"
import { CodeOutlined, AppstoreOutlined, CloudOutlined, ToolOutlined } from "@ant-design/icons"

const { Title } = Typography

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const Skills = () => {
  const { theme } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null)
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <CodeOutlined className="text-4xl text-blue-500" />,
      skills: [
        { name: "Python", level: 9 },
        { name: "TypeScript", level: 8 },
        { name: "JavaScript", level: 8 },
        { name: "C#", level: 7 },
        { name: "C++", level: 7 },
        { name: "Java", level: 7 },
        { name: "SQL", level: 8 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: <AppstoreOutlined className="text-4xl text-blue-500" />,
      skills: [
        { name: "ReactJS", level: 9 },
        { name: "Flask", level: 8 },
        { name: "Fast API", level: 8 },
        { name: "Django", level: 7 },
        { name: "Angular", level: 7 },
        { name: "Node.js", level: 7 },
        { name: "DotNet", level: 7 },
      ],
    },
    {
      name: "Databases & Cloud",
      icon: <CloudOutlined className="text-4xl text-blue-500" />,
      skills: [
        { name: "MySQL", level: 8 },
        { name: "PostgreSQL", level: 8 },
        { name: "MongoDB", level: 8 },
        { name: "Databricks", level: 7 },
        { name: "Snowflake", level: 7 },
        { name: "AWS", level: 8 },
        { name: "Azure", level: 8 },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      skills: [
        { name: "Docker", level: 8 },
        { name: "Jenkins", level: 8 },
        { name: "Git", level: 9 },
        { name: "CI/CD", level: 8 },
        { name: "Terraform", level: 8 },
        { name: "Kafka", level: 7 },
        { name: "Ansible", level: 7 },
      ],
    },
  ]

  const handleCategoryClick = (category: SkillCategory) => {
    setSelectedCategory(category)
    setModalVisible(true)
    // Reset flipped cards when opening a new category
    setFlippedCards({})
  }

  const handleCardFlip = (skillName: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [skillName]: !prev[skillName],
    }))
  }

  const handleModalClose = () => {
    setModalVisible(false)
    setSelectedCategory(null)
  }

  return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Title
              level={2}
              className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            Skills
          </Title>

          <Row gutter={[32, 32]}>
            {skillCategories.map((category, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card
                      hoverable
                      className={`h-full text-center transition-all duration-300 transform hover:scale-105 ${
                          theme === "dark" ? "bg-gray-800 text-white" : ""
                      }`}
                      bodyStyle={{
                        backgroundColor: theme === "dark" ? "#1f2937" : "",
                        padding: "32px 24px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                      onClick={() => handleCategoryClick(category)}
                  >
                    <div className="mb-4">{category.icon}</div>
                    <Title level={4} className={`mb-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {category.name}
                    </Title>
                    <div className={`mt-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Click to view skills
                    </div>
                  </Card>
                </Col>
            ))}
          </Row>

          <Modal
              title={selectedCategory?.name}
              open={modalVisible}
              onCancel={handleModalClose}
              footer={null}
              width={800}
              className={theme === "dark" ? "dark-modal" : ""}
          >
            {selectedCategory && (
                <Row gutter={[16, 16]} className="mt-4">
                  {selectedCategory.skills.map((skill, index) => (
                      <Col xs={12} sm={8} md={6} key={index}>
                        <div
                            className={`flip-card ${flippedCards[skill.name] ? "flipped" : ""}`}
                            onClick={() => handleCardFlip(skill.name)}
                        >
                          <div className={`flip-card-inner ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                            {/* Front of card */}
                            <div
                                className={`flip-card-front rounded-lg p-4 flex items-center justify-center ${
                                    theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                                }`}
                            >
                              <span className="font-medium text-center">{skill.name}</span>
                            </div>

                            {/* Back of card */}
                            <div
                                className={`flip-card-back rounded-lg p-4 flex flex-col items-center justify-center ${
                                    theme === "dark" ? "bg-blue-600" : "bg-blue-500"
                                }`}
                            >
                              <div className="text-white text-2xl font-bold">{skill.level}/10</div>
                              <div className="text-white text-xs mt-1">
                                {skill.level >= 9 ? "Expert" : skill.level >= 7 ? "Advanced" : "Intermediate"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                  ))}
                </Row>
            )}
          </Modal>
        </div>
      </section>
  )
}

export default Skills

