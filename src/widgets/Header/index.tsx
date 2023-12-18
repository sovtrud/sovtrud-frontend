import style from "./style.module.scss";
import HeaderLogo from "./icons/HeaderLogo";
import { NavLink } from "react-router-dom";
import ProcessIcon from "./icons/ProcessIcon";
import Avatar from "@/shared/Avatar";
import Button from "@/shared/ui/buttons/Button";
import MessageIcon from "./icons/MessageIcon";

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
        <Avatar />
      </div>
    </header>
  );
}

export default MainPage;
