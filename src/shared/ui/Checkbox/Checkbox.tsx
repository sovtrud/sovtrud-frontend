import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from "antd";
import "./styles.scss";

export type CheckboxProps = AntdCheckboxProps & {
  children: React.ReactNode;
  size?: "s" | "m" | "l";
};

export default function Checkbox({
  className,
  children,
  size,
  ...rest
}: CheckboxProps) {
  return (
    <AntdCheckbox className={`checkbox_size_${size} ${className}`} {...rest}>
      {children}
    </AntdCheckbox>
  );
}
