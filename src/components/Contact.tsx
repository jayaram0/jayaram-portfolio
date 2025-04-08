"use client"

import { useState } from "react"
import { Typography, Form, Input, Button, Row, Col, Card, message } from "antd"
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from "@ant-design/icons"
import { useTheme } from "../contexts/ThemeContext"

const { Title, Paragraph } = Typography
const { TextArea } = Input

const Contact = () => {
  const { theme } = useTheme()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = () => {
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      message.success("Message sent successfully!")
      form.resetFields()
      setLoading(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MailOutlined className="text-2xl text-blue-500" />,
      title: "Email",
      value: "jayaram.kinthali0@gmail.com",
      link: "mailto:jayaram.kinthali0@gmail.com",
    },
    {
      icon: <PhoneOutlined className="text-2xl text-blue-500" />,
      title: "Phone",
      value: "+91 7032044256",
      link: "tel:+917032044256",
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-500" />,
      title: "Location",
      value: "Hyderabad, India",
      link: "https://maps.google.com/?q=Hyderabad,India",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Title
          level={2}
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          Contact Me
        </Title>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={10}>
            <div className={`p-8 rounded-lg h-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              <Title level={3} className={`mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Get In Touch
              </Title>

              <Paragraph className={`text-lg mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </Paragraph>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title === "Location" ? "_blank" : undefined}
                    rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-center group no-underline"
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 ${theme === "dark" ? "bg-gray-700" : "bg-white shadow"}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {item.title}
                      </div>
                      <div
                        className={`font-medium group-hover:text-blue-500 transition-colors ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Card
              className={theme === "dark" ? "bg-gray-800 text-white" : ""}
              bodyStyle={{
                backgroundColor: theme === "dark" ? "#1f2937" : "",
                padding: "32px",
              }}
            >
              <Title level={3} className={`mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Send Me a Message
              </Title>

              <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={<span className={theme === "dark" ? "text-gray-300" : ""}>Name</span>}
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input
                        size="large"
                        placeholder="Your Name"
                        className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={<span className={theme === "dark" ? "text-gray-300" : ""}>Email</span>}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Your Email"
                        className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label={<span className={theme === "dark" ? "text-gray-300" : ""}>Subject</span>}
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input
                    size="large"
                    placeholder="Subject"
                    className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className={theme === "dark" ? "text-gray-300" : ""}>Message</span>}
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Your Message"
                    className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                    className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact

