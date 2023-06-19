import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  rest?: any;
}

export default function Button({ children, onClick, className, disabled, ...rest }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`dark:bg-transparent bg-[#1c1b22] hover:bg-slate-700 dark:hover:bg-slate-700 border border-white text-white font-bold py-3 px-6 rounded-full hoverable animate-transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

