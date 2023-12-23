import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";
import TestPage from "./TestPage";
import ProcessPage from "./ProcessPage";

const Router: FC = () => (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="main" element={<MainPage />}>
      <Route path="process" element={<ProcessPage />} />
    </Route>
    <Route path="/" element={<TestPage />}></Route>
    {/* <Route path="*" element={<Navigate to="/" />} /> */}
  </Routes>
);

export default Router;
