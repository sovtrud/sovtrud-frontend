import { Navigate, Route, Routes } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
