import { DatePicker } from "antd";
import style from "./styles/style.module.scss";
import ButtonsContainer from "@/widgets/ButtonsContainer";
import { Input } from "@/shared/ui/Input/Input";
import IconsContainer from "@/widgets/IconsContainer";
import TypographyContainer from "@/widgets/TypographyContainer";

function TestPage() {
  return (
    <div className="max-w-full">
      <h1 className={style.title}>Тестовая страница</h1>
      <DatePicker />
      <ButtonsContainer />

      <IconsContainer />
      <TypographyContainer />

      <div className="m-4">
        <Input placeholder="s" type="date" height="s" className="mb-4" />
        <Input placeholder="s" type="tel" height="s" className="mb-4" />
        <Input placeholder="xxl" type="email" height="xxl" className="mb-4" />
        <Input
          placeholder="xxl"
          type="password"
          height="xxl"
          className="mb-4"
        />
        <Input placeholder="xl" type="text" height="xl" className="mb-4" />
        <Input placeholder="m" type="text" height="m" className="mb-4" />
        <Input
          placeholder="l"
          type="search"
          height="l"
          size="large"
          className="mb-4"
        />
      </div>
    </div>
  );
}

export default TestPage;
