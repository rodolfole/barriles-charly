import { FC } from "react";

type Props = {
  color?: string;
  icon: string;
  size?: string;
};

const Icon: FC<Props> = ({ color = "white", icon, size = "2x" }) => {
  return <i className={`fa-solid fa-${icon} fa-${size} text-${color}`}></i>;
};

export default Icon;
