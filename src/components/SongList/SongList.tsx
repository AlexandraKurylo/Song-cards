import type { FC } from "react";
import type { ISongListProps } from "../../types/types";
import { SongCard } from "../SongCard";
import cls from "./SongList.module.css";

export const SongList: FC<ISongListProps> = ({ items }) => {
  if (items.length === 0) return <div className={cls.empty}>No songs found.</div>;
  return (
    <div className={cls.container}>
      {items.map((song) => (
        <SongCard key={song.id} cardObj={song} />
      ))}
    </div>
  );
};
