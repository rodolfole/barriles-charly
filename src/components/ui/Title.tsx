import { FC } from "react";

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <h2 className="text-[rgb(245,184,0)] font-normal text-3xl">{title}</h2>
  );
};

export default Title;
