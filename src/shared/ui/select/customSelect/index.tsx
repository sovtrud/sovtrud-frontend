import React, { ReactNode, Children } from "react";
import { Select as AntdSelect, SelectProps as AntdSelectProps } from "antd";

type CustomSelectProps = AntdSelectProps & {
  prefixIcon?: ReactNode;
};

const CustomSelect = ({ prefixIcon, children, ...rest }: CustomSelectProps) => {
  return (
    <div className="customSelect">
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <AntdSelect {...rest}>
        {Children.map(children, (child) => (
          <AntdSelect.Option value={child}>{child}</AntdSelect.Option>
        ))}
      </AntdSelect>
    </div>
  );
};
export default CustomSelect;
