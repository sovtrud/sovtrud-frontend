import { Input as AntdInput } from "antd";
import "./styles.scss";
import { TextAreaProps } from "antd/es/input";

const { TextArea: TextArea1 } = AntdInput;

export default function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <TextArea1
      className={`${className}`}
      autoSize={{ minRows: 3, maxRows: 6 }}
      {...rest}
    />
  );
}
