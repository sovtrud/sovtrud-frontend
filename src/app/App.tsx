import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import TestPage from "pages/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
