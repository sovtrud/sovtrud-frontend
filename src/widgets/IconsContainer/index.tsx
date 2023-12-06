import IconWithSvg from "@/shared/ui/icons/IconWithSvg";
import { SvgSize } from "@/shared/ui/icons/IconWithSvg";
import Staff from "@/assets/icons/staff_active.svg?react";
import Job from "@/assets/icons/job_active.svg?react";
import WorkFocus from "@/assets/icons/work_focus_active.svg?react";
import WorkFocusNormal from "@/assets/icons/workFocus_normal.svg?react";
import WorkHistory from "@/assets/icons/work_history_active.svg?react";
import Close from "@/assets/icons/close.svg?react";
import ArrowDown from "@/assets/icons/down.svg?react";
import ExitToApp from "@/assets/icons/exit-to-app.svg?react";
import Filter from "@/assets/icons/filter.svg?react";
import IconMenu from "@/assets/icons/icon_menu.svg?react";
import ArrowLeft from "@/assets/icons/left.svg?react";
import PlusCircle from "@/assets/icons/plus_circle.svg?react";
import ArrowRight from "@/assets/icons/right.svg?react";
import Search from "@/assets/icons/search.svg?react";
import ArrowUp from "@/assets/icons/up.svg?react";
import Artboard from "@/assets/icons/artboard.svg?react";
import Calendar from "@/assets/icons/calendar.svg?react";
import Check from "@/assets/icons/check.svg?react";
import DeleteForever from "@/assets/icons/delete-forever.svg?react";
import Edit from "@/assets/icons/edit.svg?react";
import MenuRight from "@/assets/icons/menu-right.svg?react";
import Phone from "@/assets/icons/phone-outline.svg?react";
import Plus from "@/assets/icons/plus.svg?react";
import Retweet from "@/assets/icons/retweet.svg?react";
import FilterVariant from "@/assets/icons/filter-variant.svg?react";
import CheckboxMultiple from "@/assets/icons/checkbox-multiple-marked-outline.svg?react";
import ExclamationMark from "@/assets/icons/exclamation_mark.svg?react";
import Fire from "@/assets/icons/fire.svg?react";
import "./style.scss";

export default function IconsContainer() {
  return (
    <div className="iconsContainer">
      <IconWithSvg children={Staff} status="active" size={SvgSize.BASE30} />
      <IconWithSvg children={Staff} status="normal" size={SvgSize.BASE30} />
      <IconWithSvg children={Staff} status="normal" size={SvgSize.BASE24} />
      <IconWithSvg children={Staff} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Job} status="active" size={SvgSize.BASE30} />
      <IconWithSvg children={Job} status="normal" size={SvgSize.BASE30} />
      <IconWithSvg children={Job} status="normal" size={SvgSize.BASE24} />
      <IconWithSvg children={Job} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={WorkFocus} status="active" size={SvgSize.BASE30} />
      <IconWithSvg
        children={WorkFocusNormal}
        status="not_active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg
        children={WorkFocusNormal}
        status="not_active"
        size={SvgSize.BASE30}
      />
      <IconWithSvg children={WorkFocus} status="active" size={SvgSize.BASE24} />
      <IconWithSvg
        children={WorkHistory}
        status="active"
        size={SvgSize.BASE30}
      />
      <IconWithSvg
        children={WorkHistory}
        status="normal"
        size={SvgSize.BASE30}
      />
      <IconWithSvg
        children={WorkHistory}
        status="normal"
        size={SvgSize.BASE24}
      />
      <IconWithSvg
        children={WorkHistory}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg children={Close} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Close} status="active" size={SvgSize.BASE16} />
      <IconWithSvg children={ArrowDown} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={ArrowUp} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={ArrowLeft} status="active" size={SvgSize.BASE24} />
      <IconWithSvg
        children={ArrowRight}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg children={ExitToApp} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={ExitToApp} status="active" size={SvgSize.BASE16} />
      <IconWithSvg children={Filter} status="active" size={SvgSize.BASE24} />
      <IconWithSvg
        children={PlusCircle}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg children={Search} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Artboard} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Calendar} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Calendar} status="active" size={SvgSize.BASE16} />
      <IconWithSvg children={Check} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Check} status="active" size={SvgSize.BASE16} />
      <IconWithSvg
        children={DeleteForever}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg children={Edit} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Edit} status="active" size={SvgSize.BASE16} />
      <IconWithSvg children={MenuRight} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Phone} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Plus} status="active" size={SvgSize.BASE24} />
      <IconWithSvg children={Retweet} status="active" size={SvgSize.BASE24} />
      <IconWithSvg
        children={FilterVariant}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconWithSvg
        children={CheckboxMultiple}
        status="active"
        size={SvgSize.BASE24}
      />
      <IconMenu />
      <ExclamationMark />
      <Fire />
    </div>
  );
}
