"use client"

import { Row, Col, Typography, Progress, Card, Tabs } from "antd"

const { Title, Paragraph } = Typography
const { TabPane } = Tabs

interface Skill {
    name: string
    level: number
    color?: string
}

export default function SkillsSection() {
    const frontendSkills: Skill[] = [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Ant Design", level: 85 },
    ]

    const backendSkills: Skill[] = [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 90 },
        { name: "Firebase", level: 80 },
    ]

    const otherSkills: Skill[] = [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 65 },
        { name: "Testing", level: 80 },
        { name: "Agile/Scrum", level: 85 },
        { name: "UI/UX Design", level: 75 },
    ]

    return (
        <div className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
            <Title level={2} className="text-center mb-12">
                My Skills
            </Title>

            <Paragraph className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                I've worked with a variety of technologies in the web development world. Here's an overview of my technical
                skills and proficiency levels.
            </Paragraph>

            <Tabs defaultActiveKey="1" centered className="skills-tabs">
                <TabPane tab="Frontend" key="1">
                    <Card className="mt-6">
                        <Row gutter={[24, 24]}>
                            {frontendSkills.map((skill) => (
                                <Col xs={24} sm={12} md={8} key={skill.name}>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <Progress
                                            percent={skill.level}
                                            showInfo={false}
                                            strokeColor={{ "0%": "#1677ff", "100%": "#1677ff" }}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </TabPane>

                <TabPane tab="Backend" key="2">
                    <Card className="mt-6">
                        <Row gutter={[24, 24]}>
                            {backendSkills.map((skill) => (
                                <Col xs={24} sm={12} md={8} key={skill.name}>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <Progress
                                            percent={skill.level}
                                            showInfo={false}
                                            strokeColor={{ "0%": "#1677ff", "100%": "#1677ff" }}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </TabPane>

                <TabPane tab="Other" key="3">
                    <Card className="mt-6">
                        <Row gutter={[24, 24]}>
                            {otherSkills.map((skill) => (
                                <Col xs={24} sm={12} md={8} key={skill.name}>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <Progress
                                            percent={skill.level}
                                            showInfo={false}
                                            strokeColor={{ "0%": "#1677ff", "100%": "#1677ff" }}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </TabPane>
            </Tabs>

            <div className="mt-16">
                <Title level={3} className="text-center mb-8">
                    Education & Certifications
                </Title>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={12}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start">
                                <div className="mr-4 p-2 bg-primary/10 rounded-md">
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
                                        className="lucide lucide-graduation-cap text-primary"
                                    >
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                                    </svg>
                                </div>
                                <div>
                                    <Title level={4} className="mb-1">
                                        Bachelor of Science in Computer Science
                                    </Title>
                                    <Paragraph className="text-muted-foreground mb-1">University of Technology</Paragraph>
                                    <Paragraph className="text-sm text-muted-foreground">2015 - 2019</Paragraph>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start">
                                <div className="mr-4 p-2 bg-primary/10 rounded-md">
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
                                        className="lucide lucide-award text-primary"
                                    >
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                                    </svg>
                                </div>
                                <div>
                                    <Title level={4} className="mb-1">
                                        AWS Certified Developer
                                    </Title>
                                    <Paragraph className="text-muted-foreground mb-1">Amazon Web Services</Paragraph>
                                    <Paragraph className="text-sm text-muted-foreground">2021</Paragraph>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

