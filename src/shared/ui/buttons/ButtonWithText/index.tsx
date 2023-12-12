import { Button as AntdButton } from "antd";
import "./styles.scss";

interface ButtonWithTextProps {
  children: React.ReactNode;
  type: string;
  size: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonWithText(props: ButtonWithTextProps) {
  return (
    <AntdButton
      type="primary"
      className={`button 
      ${props.type === "accent" ? "button_type_accent" : "button_type_primary"}
      ${props.icon ? "button_type_withIcon" : ""} 
      button_size_${props.size}`}
      icon={props.icon}
      onClick={props.onClick}
    >
      {props.children}
    </AntdButton>
  );
}
