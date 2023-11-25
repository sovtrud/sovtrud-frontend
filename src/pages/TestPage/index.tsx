import { DatePicker } from 'antd';
import style from "./styles/style.module.scss";
import { Input } from '@/shared/ui/Input/Input';

function TestPage() {
  return (
    <div>
        
        <h1 className={style.title}>Тестовая страница</h1>
        <DatePicker />
        <Input placeholder='text' type='email'/>
    </div>
  );
}

export default TestPage;
