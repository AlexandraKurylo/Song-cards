import type { FC } from "react";
import type { IButtonProps } from "../../types/types";
import cls from "./Button.module.css";

export const Button: FC<IButtonProps> = ({ children, onClick, disabled, variant, className }) => {
  const combinedClassName = `
    ${cls.button} 
    ${variant ? cls[variant] : ""} 
    ${className || ""}
  `.trim();

  return (
    <button className={combinedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
