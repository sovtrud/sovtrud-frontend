import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from "antd";
import "./styles.scss";

export type CheckboxProps = AntdCheckboxProps & {
  children: React.ReactNode;
};

export default function Checkbox({
  className,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <AntdCheckbox className={`checkbox-size ${className}`} {...rest}>
      {children}
    </AntdCheckbox>
  );
}
