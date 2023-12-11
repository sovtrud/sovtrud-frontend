import { DatePicker } from "antd";
import "./style.scss";

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className, ...rest }) => {
  return (
    <DatePicker
      className={`data-peacker ${className}`}
      format={"DD.MM.YYYY"}
      {...rest}
    />
  );
};

export default Calendar;
