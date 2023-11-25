import { DatePicker } from "antd";
import style from "./styles/style.module.scss";
import ButtonsContainer from "@/widgets/ButtonsContainer";

function TestPage() {
  return (
    <div>
      <h1 className={style.title}>Тестовая страница</h1>
      <DatePicker />
      <ButtonsContainer />
    </div>
  );
}

export default TestPage;
