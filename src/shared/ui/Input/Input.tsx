import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

export type InputProps = AntdInputProps;

export const Input = ({...rest}: InputProps) => {
  const style_base: string = "border-s-4 h-14 text-lg";


//   if (statsus === "1") {
//     style += "bg-red-500";
//   }

  return <AntdInput className={style_base} {...rest}/>;
};
