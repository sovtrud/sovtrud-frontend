import style from "./styles.module.scss";
import { Button as AntdButton } from "antd";

type TButtonSize = {
  size: string;
  minWidth: string;
  minHeight: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
};

interface ButtonWithTextProps {
  children: React.ReactNode;
  type: string;
  size: TButtonSize;
}

export default function ButtonWithText(props: ButtonWithTextProps) {
  function setBackgroundColor(type: string, size: string) {
    if (type === "accent") {
      return "var(--color-yellow-primary)";
    } else {
      if (size === "s") return "white";
      return "var(--color-light-brown)";
    }
  }

  function setTextColor(type: string, size: string) {
    if (type === "accent") {
      return "white";
    } else {
      if (size === "s") return "var(--color-yellow-primary)";
      return "var(--color-brown)";
    }
  }

  function setHoverBackgroundColor(type: string) {
    if (type === "accent") {
      return "var(--color-dark-yellow-primary)";
    } else {
      return "var(--color-light-brown)";
    }
  }

  function setBorder(type: string, size: string) {
    if (type === "accent" && size === "s") {
      return "1px solid var(--color-yellow-primary)";
    } else {
      return "none";
    }
  }

  function setHoverBorder(type: string, size: string) {
    if (type === "accent" || size === "s") {
      return "none";
    } else {
      return "1px solid var(--color-brown)";
    }
  }

  return (
    <AntdButton
      type="primary"
      className={style.button}
      style={{
        backgroundColor: setBackgroundColor(props.type, props.size.size),
        color: setTextColor(props.type, props.size.size),
        minWidth: props.size.minWidth,
        minHeight: props.size.minHeight,
        borderRadius: "10px",
        border: setBorder(props.type, props.size.size),
        fontSize: props.size.fontSize,
        fontWeight: props.size.fontWeight,
        lineHeight: props.size.lineHeight,
        height: props.size.lineHeight,
        padding: "10px 30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = setHoverBackgroundColor(props.type);
        e.currentTarget.style.border = setHoverBorder(
          props.type,
          props.size.size
        );
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = setBackgroundColor(
          props.type,
          props.size.size
        );
        e.currentTarget.style.border = setBorder(props.type, props.size.size);
      }}
    >
      {props.children}
    </AntdButton>
  );
}
