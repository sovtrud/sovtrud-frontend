import { Input as AntdInput, InputProps as AntdInputProps } from "antd";
import "./styles.scss";

export type InputProps = AntdInputProps & {
  height?: "s" | "m" | "l" | "xl" | "xxl";
  type: string;
};

export const Input = ({ className, height, type, ...rest }: InputProps) => {
  if (type === "password") {
    return (
      <AntdInput.Password
        className={`${className} input_size_${height} input_specific`}
        type={type}
        {...rest}
      />
    );
  }
  return (
    <AntdInput
      className={`${className} input_size_${height} input_specific`}
      type={type}
      {...rest}
    />
  );
};
