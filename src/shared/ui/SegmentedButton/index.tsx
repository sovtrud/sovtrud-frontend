import { Segmented as AntdSegmented } from "antd";
import "./styles.scss";

export default function SegmentedButton() {
  return (
    <AntdSegmented
      options={["Плановые", "Срочные", "Просроченные"]}
      size="large"
      className="segmented-button"
    ></AntdSegmented>
  );
}
