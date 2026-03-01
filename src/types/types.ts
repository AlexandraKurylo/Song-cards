import type { ReactNode } from "react";

export interface CardData {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags: string[];
  archived: boolean;
}

export interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "tab" | "start" | "nav";
}

export interface ITabControlsProps {
  totalTabs: number;
  activeTab: number;
  onTabChange: (index: number) => void;
}

export interface INavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}
