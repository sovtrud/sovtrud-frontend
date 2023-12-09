import { Button as AntdButton } from "antd";
import "./styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  changeStroke?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <AntdButton
      type="text"
      icon={props.children}
      className={`button ${
        props.changeStroke
          ? "button_change-icon-stroke"
          : "button_change-icon-fill"
      }
      ${props.className ? props.className : ""}`}
      onClick={props.onClick}
    />
  );
}
