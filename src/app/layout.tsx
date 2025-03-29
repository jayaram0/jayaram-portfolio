import type React from "react"
import { ConfigProvider, theme } from "antd"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head ><title>My Portfolio</title></head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#1677ff",
                        borderRadius: 6,
                    },
                    algorithm: [theme.defaultAlgorithm],
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}

