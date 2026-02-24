import type { FC } from "react";
import type { IButtonProps } from "../../types/types";
import cls from "./Button.module.css";

export const Button: FC<IButtonProps> = (props) => {
  const combinedClassName = `
    ${cls.button} 
    ${props.variant ? cls[props.variant] : ""} 
    ${props.className || ""}
  `.trim();

  return (
    <button className={combinedClassName} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
