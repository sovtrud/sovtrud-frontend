import { Input as AntdInput } from "antd";
import "./styles.scss";
import { TextAreaProps } from "antd/es/input";

const { TextArea: TextArea1 } = AntdInput;

export const TextArea = ({ className, ...rest }: TextAreaProps) => {
  return <TextArea1 className={`${className}`} {...rest} />;
};
