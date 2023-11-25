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
      button_size_${props.size}`}
    >
      {props.children}
    </AntdButton>
  );
}
