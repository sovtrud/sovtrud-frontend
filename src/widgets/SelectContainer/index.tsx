import CustomSelect from "@/shared/ui/select/customSelect";
import IconWithSvg from "@/shared/ui/icons/IconWithSvg";
import WorkHistory from "@/assets/icons/work_history_active.svg?react";
import { SvgSize } from "@/shared/ui/icons/IconWithSvg";
import ArrowUp from "@/assets/icons/up.svg?react";

const SelectContainer = () => {
  const options = [
    "Проект: Обслуживание Техники",
    "Работы",
    "Группы сотрудников",
    "Техника и технологическое оборудование",
  ];
  //   function filterOption(inputValue, option) {
  //     return option.value.toLowerCase().includes(inputValue.toLowerCase());
  //   }
  return (
    <CustomSelect
      size="large"
      prefixIcon={
        <IconWithSvg
          children={WorkHistory}
          status="normal"
          size={SvgSize.BASE30}
        />
      }
      suffixIcon={
        <IconWithSvg children={ArrowUp} status="normal" size={SvgSize.BASE24} />
      }
      onChange={(val) => console.log(val)}
      children={options}
      showSearch
      //   filterOption={filterOption}
    />
  );
};
export default SelectContainer;
