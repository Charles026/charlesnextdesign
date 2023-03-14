import Tag from './Tag';
import styles from './Card.module.css';
import React from 'react';
import Link from 'next/link'

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  key: string;
  href: string;
}

const Card = ({ image, title, subtitle, tags , href }: CardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={href}>
      <div className={styles.card__image_container}>
        <img src={image} alt={title} className={styles.card__image} />
        {isHovered && (
          <div className={styles.card__image_hover}>
            <img src={image} alt={title} className={styles.card__image_hover__img} />
          </div>
        )}
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>{subtitle}</p>
      </div>
      <div className={styles.card__tags}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      </Link>
    </div>
  );
};

export default Card;
