"use client"

import { Row, Col, Typography, Avatar, Card, Space } from "antd"
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function AboutSection() {
    return (
        <div className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
            <Row gutter={[32, 32]} align="middle">
                <Col xs={24} md={12} className="flex justify-center md:justify-end">
                    <Avatar size={240} src="/placeholder.svg?height=240&width=240" alt="Profile Picture" />
                </Col>
                <Col xs={24} md={12}>
                    <Space direction="vertical" size="large" className="w-full">
                        <div>
                            <Title level={1}>Hi, I'm John Doe</Title>
                            <Title level={3} className="text-primary font-normal mt-2">
                                Full Stack Developer
                            </Title>
                        </div>
                        <Paragraph className="text-lg text-muted-foreground">
                            I'm a passionate developer with expertise in building modern web applications. With 5+ years of
                            experience, I specialize in creating responsive, user-friendly interfaces and robust backend systems.
                        </Paragraph>
                        <Space size="middle">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined className="text-2xl hover:text-primary transition-colors" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined className="text-2xl hover:text-primary transition-colors" />
                            </a>
                            <a href="mailto:contact@example.com">
                                <MailOutlined className="text-2xl hover:text-primary transition-colors" />
                            </a>
                        </Space>
                        <div className="pt-4">
                            <a
                                href="/resume.pdf"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Download Resume
                            </a>
                        </div>
                    </Space>
                </Col>
            </Row>

            <div className="mt-16">
                <Title level={2} className="text-center mb-12">
                    About Me
                </Title>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-center mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-code-2"
                                    >
                                        <path d="m18 16 4-4-4-4" />
                                        <path d="m6 8-4 4 4 4" />
                                        <path d="m14.5 4-5 16" />
                                    </svg>
                                </div>
                                <Title level={4}>Development</Title>
                            </div>
                            <Paragraph className="text-muted-foreground">
                                I build applications with modern technologies like React, Node.js, and TypeScript, focusing on clean
                                code and best practices.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-center mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-layout-dashboard"
                                    >
                                        <rect width="7" height="9" x="3" y="3" rx="1" />
                                        <rect width="7" height="5" x="14" y="3" rx="1" />
                                        <rect width="7" height="9" x="14" y="12" rx="1" />
                                        <rect width="7" height="5" x="3" y="16" rx="1" />
                                    </svg>
                                </div>
                                <Title level={4}>Design</Title>
                            </div>
                            <Paragraph className="text-muted-foreground">
                                I create intuitive user interfaces with a focus on user experience, accessibility, and responsive design
                                for all devices.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-center mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-rocket"
                                    >
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                    </svg>
                                </div>
                                <Title level={4}>Strategy</Title>
                            </div>
                            <Paragraph className="text-muted-foreground">
                                I help businesses identify the right technologies and approaches to solve their unique challenges and
                                achieve their goals.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

