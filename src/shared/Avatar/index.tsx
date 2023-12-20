import { Avatar as AntdAvatar } from "antd";
import style from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Status } from "./enums/statusEnum";

type AvatarProps = {
  src?: string;
  initials?: string;
  status: Status;
};

function Avatar(props: AvatarProps) {
  const { status } = props;
  const statusColor = status === Status.online ? "#4ead40" : "red";
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
      <div
        className={style.ellipse}
        style={{ backgroundColor: statusColor }}
      ></div>
    </div>
  );
}

export default Avatar;
