import { Avatar as AntdAvatar } from "antd";
import style from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

type AvatarProps = {
  src?: string;
  initials?: string;
};

function Avatar(props: AvatarProps) {
  return (
    <div className={style.avatar}>
      <AntdAvatar
        src={props.src && props.src}
        className={style.avatarInner}
        size={88}
        icon={!props.src || !props.initials ? <UserOutlined /> : ""}
      >
        {props.initials ? props.initials : ""}
      </AntdAvatar>
      <div className={style.ellipse}></div>
    </div>
  );
}

export default Avatar;
