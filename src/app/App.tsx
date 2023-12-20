import "./styles/App.scss";
import { ConfigProvider } from "antd";
import Router from "@/pages";

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
          Checkbox: {
            colorPrimary: "#ffae40",
            colorBorder: "#ffae40",
            colorPrimaryHover: "#ffae40",
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
