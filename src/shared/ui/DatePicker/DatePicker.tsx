import {
  DatePicker as AntdDatePicker,
  DatePickerProps as AntdDatePickerProps,
} from "antd";
import "./styles.scss";

export type DatePickerProps = AntdDatePickerProps & {
  height?: "s" | "m";
};

export const DatePicker = ({ className, height, ...rest }: DatePickerProps) => {
  return (
    <AntdDatePicker
      className={`${className} datepicker datepicker_size_${height}`}
      placeholder="Выберете дату"
      {...rest}
    />
  );
};
