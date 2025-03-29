"use client"

import { useState } from "react"
import { Row, Col, Typography, Form, Input, Button, message } from "antd"
import { MailOutlined, PhoneOutlined, HomeOutlined, SendOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography
const { TextArea } = Input

interface FormValues {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactSection() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onFinish = (values: FormValues) => {
        setLoading(true)

        // Simulate form submission
        setTimeout(() => {
            console.log("Form values:", values)
            message.success("Your message has been sent successfully!")
            form.resetFields()
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
            <Title level={2} className="text-center mb-12">
                Get In Touch
            </Title>

            <Paragraph className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
                contact form or through the provided contact information.
            </Paragraph>

            <Row gutter={[48, 48]}>
                <Col xs={24} md={10}>
                    <div className="space-y-8">
                        <div>
                            <Title level={4}>Contact Information</Title>
                            <Paragraph className="text-muted-foreground">
                                Feel free to reach out to me through any of these channels.
                            </Paragraph>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="mr-4 p-2 bg-primary/10 rounded-md">
                                    <MailOutlined className="text-primary text-lg" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                                        contact@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 p-2 bg-primary/10 rounded-md">
                                    <PhoneOutlined className="text-primary text-lg" />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 p-2 bg-primary/10 rounded-md">
                                    <HomeOutlined className="text-primary text-lg" />
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">San Francisco, California</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Title level={4}>Follow Me</Title>
                            <div className="flex space-x-4 mt-2">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary"
                                >
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
                                        className="lucide lucide-github"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary"
                                >
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
                                        className="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary"
                                >
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
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={24} md={14}>
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <Title level={4} className="mb-6">
                            Send Me a Message
                        </Title>

                        <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
                                        <Input placeholder="Your name" size="large" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, message: "Please enter your email" },
                                            { type: "email", message: "Please enter a valid email" },
                                        ]}
                                    >
                                        <Input placeholder="Your email" size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
                                <Input placeholder="Subject of your message" size="large" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: "Please enter your message" }]}
                            >
                                <TextArea placeholder="Your message" rows={6} size="large" />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    icon={<SendOutlined />}
                                    size="large"
                                    className="w-full sm:w-auto"
                                >
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

