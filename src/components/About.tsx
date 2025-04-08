"use client"

import { Typography, Row, Col, Card } from "antd"
import { UserOutlined, TrophyOutlined, BulbOutlined } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"

const { Title, Paragraph } = Typography

const About = () => {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Title
          level={2}
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          About Me
        </Title>

        <Row gutter={[32, 32]} className="mb-16">
          <Col xs={24} md={12}>
            <div className={`h-full p-8 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="flex items-center mb-6">
                <UserOutlined className="text-3xl text-blue-500 mr-4" />
                <Title level={3} className={`m-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Professional Profile
                </Title>
              </div>
              <Paragraph className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Experienced Full Stack Developer with over 4 years of expertise in designing, developing, and optimizing
                web applications and data-driven solutions. Skilled in building end-to-end applications using Python,
                ReactJS, and TypeScript, with a solid foundation in C++, Java, and SQL.
              </Paragraph>
              <Paragraph className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Proficient in deploying scalable systems and implementing robust data integrations, leveraging tools
                like AWS, Docker, and Jenkins. Proven track record of collaborating with cross-functional teams to
                deliver user-centered solutions.
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className={`h-full p-8 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="flex items-center mb-6">
                <TrophyOutlined className="text-3xl text-blue-500 mr-4" />
                <Title level={3} className={`m-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Experience Highlights
                </Title>
              </div>
              <ul
                className={`list-disc pl-5 space-y-3 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                <li>Led cloud migration with Terraform, improving deployment speed by 30%</li>
                <li>Developed ReactJS applications with 40% increased user engagement</li>
                <li>Optimized data workflows with PostgreSQL and Databricks</li>
                <li>Implemented event-driven architecture with Apache Kafka</li>
                <li>Streamlined CI/CD processes, reducing deployment errors by 35%</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <div className={`p-8 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="flex items-center mb-6">
                <BulbOutlined className="text-3xl text-blue-500 mr-4" />
                <Title level={3} className={`m-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Education & Certifications
                </Title>
              </div>

              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card
                    title="Education"
                    bordered={false}
                    className={theme === "dark" ? "bg-gray-700 text-white" : ""}
                    headStyle={{
                      borderBottom: theme === "dark" ? "1px solid #4B5563" : "",
                      color: theme === "dark" ? "white" : "",
                    }}
                  >
                    <div className="mb-4">
                      <div className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                        Bachelor of Technology
                      </div>
                      <div className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        Computer Science and Engineering
                      </div>
                      <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        Aditya Institute of Technology and Management
                      </div>
                      <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        2016 - 2020 | CGPA: 7.71
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
                  <Card
                    title="Certifications"
                    bordered={false}
                    className={theme === "dark" ? "bg-gray-700 text-white" : ""}
                    headStyle={{
                      borderBottom: theme === "dark" ? "1px solid #4B5563" : "",
                      color: theme === "dark" ? "white" : "",
                    }}
                  >
                    <ul className={`list-disc pl-5 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      <li className="mb-2">
                        <div className="font-medium">AWS Certified Solutions Architect - Associate</div>
                        <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          Valid Through 05/2025
                        </div>
                      </li>
                      <li>
                        <div className="font-medium">Microsoft Certified: Azure Fundamentals</div>
                        <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Earned 05/2021</div>
                      </li>
                    </ul>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About

