import { Button as AntdButton } from "antd";
import "./styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function LinkButton(props: ButtonProps) {
  return (
    <AntdButton
      type="link"
      className={`button ${props.icon ? "button_type_withIcon" : ""} `}
      icon={props.icon}
      onClick={props.onClick}
    >
      {props.children}
    </AntdButton>
  );
}
