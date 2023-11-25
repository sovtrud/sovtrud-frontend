import { Button as AntdButton } from "antd";
import "./styles.scss";

interface ButtonWithTextProps {
  children: React.ReactNode;
  type: string;
  size: string;
}

export default function ButtonWithText(props: ButtonWithTextProps) {
  return (
    <AntdButton
      type="primary"
      className={`button 
      ${props.type === "accent" ? "button_type_accent" : "button_type_primary"}
      ${props.size === "s" ? "button_size_s" : ""}
      ${props.size === "m" ? "button_size_m" : ""}
      ${props.size === "l" ? "button_size_l" : ""}
      ${props.size === "xl" ? "button_size_xl" : ""}`}
    >
      {props.children}
    </AntdButton>
  );
}
