import React, { ReactNode, MouseEvent } from "react";

interface PillProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  rest?: any;
}

export default function Pill({ children, onClick, className, ...rest }: PillProps) {
  return (
    <span
      onClick={onClick}
      className={`dark:bg-transparent hover:bg-dark dark:hover:bg-slate-700 border border-dark dark:border-light text-dark dark:text-white  hover:text-white font-bold py-3 px-6 rounded-full cursor-pointer hoverable animate-transition ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

