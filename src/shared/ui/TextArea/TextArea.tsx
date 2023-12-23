import { Input as AntdInput } from "antd";
import "./styles.scss";
import { TextAreaProps as AntdTextAreaProps } from "antd/es/input";
import IconWithSvg from "../icons/IconWithSvg";
import Close from "@/assets/icons/close.svg?react";
import Check from "@/assets/icons/check.svg?react";
import Button from "@/shared/ui/buttons/Button";
import { SvgSize } from "@/shared/ui/icons/IconWithSvg";
import { useState } from "react";

const { TextArea: AntdTextArea } = AntdInput;
export type TextAreaProps = AntdTextAreaProps & {
  onSave?: (text: string) => void;
};

export default function TextArea({
  className,
  onSave,
  ...rest
}: TextAreaProps) {
  const [text, setText] = useState<string>("");
  function handleClickClose() {
    setText("");
  }
  function handleClickSave() {
    onSave?.(text);
  }
  return (
    <div className={`${className} text_area_container`}>
      <AntdTextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoSize={{ minRows: 3, maxRows: 6 }}
        {...rest}
      />
      <Button className="text-area_btn_close" onClick={handleClickClose}>
        <IconWithSvg children={Close} status="active" size={SvgSize.BASE16} />
      </Button>
      <Button className="text-area_btn_check" onClick={handleClickSave}>
        <IconWithSvg children={Check} status="active" size={SvgSize.BASE16} />
      </Button>
    </div>
  );
}
