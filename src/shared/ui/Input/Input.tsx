import { Input as AntdInput, InputProps as AntdInputProps } from "antd";
import "./styles.scss";
import Edit from "@/assets/icons/edit.svg?react";
import IconWithSvg from "@/shared/ui/icons/IconWithSvg";
import { SvgSize } from "@/shared/ui/icons/IconWithSvg";

export type InputProps = AntdInputProps & {
  height?: "s" | "m" | "l" | "xl" | "xxl";
  type: string;
};

export const Input = ({ className, height, type, ...rest }: InputProps) => {
  if (type === "password") {
    return (
      <AntdInput.Password
        className={`${className} input input_size_${height} input_specific`}
        type={type}
        {...rest}
      />
    );
  }
  if (type === "search") {
    return (
      <AntdInput.Search
        className={`${className} input input_size_${height} input_specific`}
        type={type}
        {...rest}
      />
    );
  }
  if (type === "tel") {
    return (
      <AntdInput
        className={`${className} input input_size_${height} input_specific`}
        prefix={
          <IconWithSvg children={Edit} status="active" size={SvgSize.BASE16} />
        }
        type={type}
        {...rest}
      />
    );
  }

  return (
    <AntdInput
      className={`${className} input input_size_${height} input_specific`}
      type={type}
      {...rest}
    />
  );
};
