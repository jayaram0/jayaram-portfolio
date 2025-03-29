"use client"

import { useState } from "react"
import { Layout, Menu, Button, Drawer } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import SkillsSection from "../components/skills-section"
import ContactSection from "../components/contact-section"
import { ThemeToggle } from "../components/theme-toggle"
import { useMobile } from "../hooks/use-mobile"

const { Header, Content, Footer } = Layout

export default function Home() {
    const [activeSection, setActiveSection] = useState("about")
    const [drawerOpen, setDrawerOpen] = useState(false)
    const isMobile = useMobile()

    const menuItems = [
        { key: "about", label: "About" },
        { key: "projects", label: "Projects" },
        { key: "skills", label: "Skills" },
        { key: "contact", label: "Contact" },
    ]

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setDrawerOpen(false)
    }

    return (
        <Layout className="min-h-screen bg-background">
            <Header className="fixed w-full z-10 px-4 md:px-6 flex items-center justify-between bg-background shadow-sm h-16 border-b border-border">
                <div className="text-xl font-bold text-foreground">Portfolio</div>
                <div className="flex items-center">
                    <ThemeToggle />
                    {isMobile ? (
                        <>
                            <Button
                                type="text"
                                icon={<MenuOutlined />}
                                onClick={() => setDrawerOpen(true)}
                                className="flex items-center justify-center ml-2"
                            />
                            <Drawer title="Menu" placement="right" onClose={() => setDrawerOpen(false)} open={drawerOpen}>
                                <Menu
                                    mode="vertical"
                                    selectedKeys={[activeSection]}
                                    items={menuItems.map((item) => ({
                                        key: item.key,
                                        label: <a onClick={() => scrollToSection(item.key)}>{item.label}</a>,
                                    }))}
                                />
                            </Drawer>
                        </>
                    ) : (
                        <Menu
                            mode="horizontal"
                            selectedKeys={[activeSection]}
                            className="border-none flex-1 justify-end bg-transparent ml-4"
                            items={menuItems.map((item) => ({
                                key: item.key,
                                label: <a onClick={() => scrollToSection(item.key)}>{item.label}</a>,
                            }))}
                        />
                    )}
                </div>
            </Header>
            <Content className="pt-16">
                <section id="about" className="min-h-screen">
                    <AboutSection />
                </section>
                <section id="projects" className="min-h-screen">
                    <ProjectsSection />
                </section>
                <section id="skills" className="min-h-screen">
                    <SkillsSection />
                </section>
                <section id="contact" className="min-h-screen">
                    <ContactSection />
                </section>
            </Content>
            <Footer className="text-center bg-background">
                <p className="text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </Footer>
        </Layout>
    )
}

