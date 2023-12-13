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
            colorPrimary: "#cfc7c3",
            colorPrimaryHover: "#687281",
            hoverBorderColor: "#687281",
            activeBorderColor: "#464f59",
            colorPrimaryActive: "#464f59",
            colorBgContainer: "white",
            borderRadius: 8,
            activeShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          },
          DatePicker: {
            activeBorderColor: "#464f59",
            hoverBorderColor: "#687281",
            activeShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
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
