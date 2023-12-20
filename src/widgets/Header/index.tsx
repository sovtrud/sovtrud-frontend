import HeaderLogo from "./icons/HeaderLogo";
import { NavLink } from "react-router-dom";
import ProcessIcon from "./icons/ProcessIcon";
import Avatar from "@/shared/Avatar";
import Button from "@/shared/ui/buttons/Button";
import MessageIcon from "./icons/MessageIcon";
import IconWithSvg, { SvgSize } from "@/shared/ui/icons/IconWithSvg";
import ExitIcon from "@/assets/icons/exit-to-app.svg?react";
import MenuRight from "@/assets/icons/menu-right.svg?react";
import style from "./style.module.scss";
import { Status } from "@/shared/Avatar/enums/statusEnum";

function MainPage() {
  return (
    <header className={style.header}>
      <div className={style.headerInner}>
        <HeaderLogo />
        <nav className={style.nav}>
          <ul>
            <li className={style.navItem}>
              <NavLink
                to="/main/process"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? style.active : ""
                }
              >
                <ProcessIcon />
                <p>Процесс</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.person}>
        <Button className={style.personButton}>
          <MessageIcon />
        </Button>
        <Avatar status={Status.online} />
        <Button className={style.btnMenuRight}>
          <IconWithSvg
            children={MenuRight}
            status="active"
            size={SvgSize.BASE24}
          />
        </Button>
      </div>
      <Button className={`${style.antBtn} ${style.exitButton}`}>
        <div className={style.exitButtonInner}>
          <p className={style.exitButtonText}>Выход</p>
          <IconWithSvg
            children={ExitIcon}
            status="normal"
            size={SvgSize.BASE24}
          />
        </div>
      </Button>
    </header>
  );
}

export default MainPage;
