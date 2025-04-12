"use client"

import { useState } from "react"
import { Typography, Row, Col, Card, Tag, Button, Modal, Carousel } from "antd"
import { GithubOutlined, LinkOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

const { Title, Paragraph } = Typography

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  gallery: string[]
}

const Projects = () => {
  const { theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const projects: Project[] = [
    {
      id: 1,
      title: "Cloud Migration with Terraform",
      description: "Led the migration of a web application across AWS cloud environments using Terraform.",
      longDescription:
          "Led the migration of a web application across AWS cloud environments, using Terraform for infrastructure automation to achieve a 30% increase in deployment speed and 25% enhancement in application security and scalability. Implemented best practices for cloud architecture and security.",
      tags: ["AWS", "Terraform", "Cloud Migration", "Infrastructure as Code"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 2,
      title: "Interactive Data Visualization Dashboard",
      description:
          "Developed and optimized interactive web applications with ReactJS and real-time data visualizations.",
      longDescription:
          "Developed and optimized interactive web applications with ReactJS, implementing responsive design and real-time data visualizations, leading to a 40% increase in user engagement and 30% improvement in stakeholder accessibility to insights. The dashboard provides comprehensive analytics and reporting capabilities.",
      tags: ["ReactJS", "Data Visualization", "TypeScript", "Responsive Design"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 3,
      title: "Event-Driven Architecture with Kafka",
      description: "Spearheaded a distributed messaging POC using Apache Kafka with Docker.",
      longDescription:
          "Spearheaded a distributed messaging POC using Apache Kafka with Docker, establishing a scalable, event-driven architecture, and enabling real-time data streaming across distributed systems for 40% faster message processing. The solution improved system resilience and scalability.",
      tags: ["Apache Kafka", "Docker", "Microservices", "Event-Driven"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 4,
      title: "Developer Portal with Backstage",
      description: "Led a POC to implement Backstage, an open-source developer portal.",
      longDescription:
          "Led a POC to implement Backstage, an open-source developer portal, unifying infrastructure tools, services, and documentation to streamline development workflows, reducing onboarding time by 30% and increasing productivity by 20%. The portal provides a centralized location for all development resources.",
      tags: ["Backstage", "Developer Experience", "Documentation", "Workflow Optimization"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Title
              level={2}
              className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            Projects
          </Title>

          <Row gutter={[24, 32]}>
            {projects.map((project) => (
                <Col xs={24} md={12} key={project.id}>
                  <Card
                      hoverable
                      cover={
                        <div className="h-48 overflow-hidden">
                          <img
                              alt={project.title}
                              src={project.imageUrl || "/placeholder.svg"}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      }
                      className={`h-full ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}
                      bodyStyle={{
                        padding: "24px",
                        backgroundColor: theme === "dark" ? "#1f2937" : "",
                        color: theme === "dark" ? "white" : "",
                      }}
                      onClick={() => setSelectedProject(project)}
                  >
                    <Title level={4} className={`mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {project.title}
                    </Title>
                    <Paragraph
                        className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                        ellipsis={{ rows: 2 }}
                    >
                      {project.description}
                    </Paragraph>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, isMobile ? 2 : 3).map((tag, index) => (
                          <Tag key={index} color="blue">
                            {tag}
                          </Tag>
                      ))}
                      {project.tags.length > (isMobile ? 2 : 3) && (
                          <Tag color="default">+{project.tags.length - (isMobile ? 2 : 3)}</Tag>
                      )}
                    </div>
                    <Button type="primary" className="w-full bg-blue-500 hover:bg-blue-600">
                      View Details
                    </Button>
                  </Card>
                </Col>
            ))}
          </Row>

          <Modal
              title={selectedProject?.title}
              open={!!selectedProject}
              onCancel={() => setSelectedProject(null)}
              footer={null}
              width={isMobile ? "95%" : 800}
              className={theme === "dark" ? "dark-modal" : ""}
          >
            {selectedProject && (
                <div>
                  <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} className="mb-6">
                    {selectedProject.gallery.map((image, index) => (
                        <div key={index} className="h-60 md:h-80">
                          <img
                              src={image || "/placeholder.svg"}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              className="w-full h-full object-contain"
                          />
                        </div>
                    ))}
                  </Carousel>

                  <Paragraph
                      className={`text-base md:text-lg mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {selectedProject.longDescription}
                  </Paragraph>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                        <Tag key={index} color="blue">
                          {tag}
                        </Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.githubUrl && (
                        <Button
                            type="primary"
                            icon={<GithubOutlined />}
                            href={selectedProject.githubUrl}
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 mb-2"
                        >
                          View Code
                        </Button>
                    )}
                    {selectedProject.liveUrl && (
                        <Button
                            icon={<LinkOutlined />}
                            href={selectedProject.liveUrl}
                            target="_blank"
                            className={`mb-2 ${theme === "dark" ? "border-gray-600 text-white" : ""}`}
                        >
                          Live Demo
                        </Button>
                    )}
                  </div>
                </div>
            )}
          </Modal>
        </div>
      </section>
  )
}

export default Projects
