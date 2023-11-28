import { Navigate, Route, Routes } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import "./styles/App.scss";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: "#FFAE40",
            colorPrimaryHover: "#ff9c15",
            colorPrimaryActive: "#f18e08",
            colorBgContainer: "#F8F8F8",
            borderRadius: 8,
          },
        },
      }}
    >
      <Routes>
        <Route path="/" element={<TestPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
