import type { FC } from "react";
import type { CardData } from "../../types/types";
import cls from "./SongCard.module.css";

interface CardProps {
  cardObj: CardData;
}

export const SongCard: FC<CardProps> = ({ cardObj }) => {
  return (
    <div className={cls.card}>
      <img className={cls.cardImage} src={cardObj.imageUrl} alt={cardObj.title} />
      <div className={cls.cardContent}>
        <h2 className={cls.cardTitle}>{cardObj.title}</h2>
        <p className={cls.cardDescription}>{cardObj.description}</p>
        <p className={cls.cardDate}>{cardObj.date}</p>
        <div className={cls.cardTags}>
          {cardObj.tags.map((tag) => (
            <span key={tag} className={cls.cardTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
