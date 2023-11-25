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

  return (
    <AntdButton
      type="primary"
      style={{
        backgroundColor: setBackgroundColor(props.type, props.size.size),
        color: setTextColor(props.type, props.size.size),
        minWidth: props.size.minWidth,
        minHeight: props.size.minHeight,
        borderRadius: "10px",
        border:
          props.type === "primary" && props.size.size === "s"
            ? "1px solid var(--color-yellow-primary)"
            : "none",
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
    >
      {props.children}
    </AntdButton>
  );
}
