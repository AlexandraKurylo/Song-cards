import type { FC } from "react";
import type { ITabControlsProps } from "../../types/types";
import { Button } from "../Button";
import cls from "./TabControls.module.css";

export const TabControls: FC<ITabControlsProps> = ({ totalTabs, activeTab, onTabChange }) => {
  return (
    <div className={cls.tabButtons}>
      {Array.from({ length: totalTabs }).map((_, index) => (
        <Button key={index} variant="tab" className={activeTab === index ? "active" : ""} onClick={() => onTabChange(index)}>
          Tab {index + 1}
        </Button>
      ))}
    </div>
  );
};
