import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  classes?: string;
};

const Fade: FC<Props> = ({ children, classes }) => {
  return (
    <div
      className={`bg-[rgba(43,28,21,0.8)] flex items-center h-full justify-center p-20 w-full ${classes}`}
    >
      {children}
    </div>
  );
};

export default Fade;
