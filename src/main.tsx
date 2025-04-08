import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./contexts/ThemeContext"
import { ConfigProvider } from "antd"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <ConfigProvider>
                <App />
            </ConfigProvider>
        </ThemeProvider>
    </React.StrictMode>,
)

