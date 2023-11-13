import { DatePicker } from 'antd';
import style from "./styles/style.module.scss";

function TestPage() {
  return (
    <div>
        
        <h1 className={style.title}>Тестовая страница</h1>
        <DatePicker />
    </div>
  );
}

export default TestPage;
