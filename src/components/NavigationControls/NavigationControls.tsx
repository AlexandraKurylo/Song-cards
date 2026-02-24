import type { FC } from "react";
import type { INavigationControlsProps } from "../../types/types";
import { Button } from "../Button";
import cls from "./NavigationControls.module.css";

export const NavigationControls: FC<INavigationControlsProps> = ({ onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className={cls.navigationButtons}>
      <Button onClick={onPrev} disabled={isPrevDisabled} variant="nav">
        <b>&lt;</b> Previous
      </Button>
      <Button onClick={onNext} disabled={isNextDisabled} variant="nav">
        Next <b>&gt;</b>
      </Button>
    </div>
  );
};
