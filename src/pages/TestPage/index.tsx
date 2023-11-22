import { DatePicker } from "antd";
import style from "./styles/style.module.scss";
import NextButton from "@/shared/ui/buttons/NextButton";

function TestPage() {
  return (
    <div>
      <h1 className={style.title}>Тестовая страница</h1>
      <DatePicker />
      <NextButton />
    </div>
  );
}

export default TestPage;
