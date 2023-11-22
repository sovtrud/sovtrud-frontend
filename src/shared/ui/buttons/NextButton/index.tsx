import { Button } from "antd";
import style from "./styles.module.scss";

export default function NextButton() {
  return <Button type="primary" className={style.button} style={{ backgroundColor: '#FFAE40' }}>Далее</Button>;
}
