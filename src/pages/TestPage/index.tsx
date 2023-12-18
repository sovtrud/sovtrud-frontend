import style from "./styles/style.module.scss";
import ButtonsContainer from "@/widgets/ButtonsContainer";
import { Input } from "@/shared/ui/Input/Input";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import IconsContainer from "@/widgets/IconsContainer";
import Calendar from "@/shared/ui/Calendar/Calendar";
import { TextArea } from "@/shared/ui/TextArea/TextArea";

function TestPage() {
  return (
    <div className="max-w-full">
      <h1 className={style.title}>Тестовая страница</h1>
      <Calendar />
      <DatePicker />
      <ButtonsContainer />

      <IconsContainer />
      {/* <TypographyContainer /> */}

      <div className="m-4">
        <TextArea
          placeholder="autoSize"
          autoSize={{ minRows: 3, maxRows: 5 }}
          className="mb-4"
        />
        <TextArea className="mb-4" />
        <Input placeholder="s телефон" type="tel" height="s" className="mb-4" />
        <Input
          placeholder="xxl email"
          type="email"
          height="xxl"
          className="mb-4"
        />
        <Input
          placeholder="xxl password"
          type="password"
          height="xxl"
          className="mb-4"
        />
        <Input placeholder="xl text" type="text" height="xl" className="mb-4" />
        <Input placeholder="m text" type="text" height="m" className="mb-4" />
        <Input
          placeholder="l search"
          type="search"
          height="l"
          className="mb-4"
        />
        <DatePicker />
      </div>
    </div>
  );
}

export default TestPage;
