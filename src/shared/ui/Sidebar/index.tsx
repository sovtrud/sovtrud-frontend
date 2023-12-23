import React from "react";
import { Menu as AntdMenu, MenuProps } from "antd";
import "./styles.scss";

import { Input } from "../Input/Input";
import IconWithSvg, { SvgSize } from "../icons/IconWithSvg";
import WorkHistory from "@/assets/icons/work_history_active.svg?react";
import WorkFocusNormal from "@/assets/icons/workFocus_normal.svg?react";
import Staff from "@/assets/icons/staff_active.svg?react";
import Job from "@/assets/icons/job_active.svg?react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "Проект: Обслуживание Техники",
    "sub1",
    <IconWithSvg
      children={WorkHistory}
      status="normal"
      size={SvgSize.BASE30}
    />,
    [
      getItem(
        "Работы",
        "g1",
        <IconWithSvg
          children={WorkFocusNormal}
          status="not_active"
          size={SvgSize.BASE30}
        />,
        [
          getItem("Электромонтеров", "a1"),
          getItem("Слесарные", "a2"),
          getItem("Инженеров", "a3"),
        ]
      ),
      getItem(
        "Сотрудники и департаменты",
        "g2",
        <IconWithSvg children={Staff} status="normal" size={SvgSize.BASE30} />,
        [
          getItem("Административно-технический", "b1"),
          getItem("Дежурный оперативно-диспетчерский", "b2"),
          getItem("Ремонтный", "b3"),
          getItem("Электротехнический", "b4"),
        ]
      ),
      getItem(
        "Техника и технологическое оборудование",
        "g3",
        <IconWithSvg children={Job} status="normal" size={SvgSize.BASE30} />,
        [
          getItem("Теплица коридор", "c1", null, [
            getItem("Растворный узел отделения №1 и 2", "d1"),
            getItem("Насосная станция", "d2"),
          ]),
          getItem("Котельная №1", "c2", null, [
            getItem("Option 1", "e1"),
            getItem("Option 2", "e2"),
          ]),
        ]
      ),
    ]
  ),
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Input
        placeholder="Поиск"
        type="search"
        height="l"
        size="large"
        className="mb-4"
      />
      <AntdMenu mode="inline" items={items} className="sidebar__menu" />
    </div>
  );
}
