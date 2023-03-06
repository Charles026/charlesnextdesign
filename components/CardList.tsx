import React from 'React';
import Card from './Card';

interface CardListProps {
  data: {
    image: string;
    title: string;
    subtitle: string;
    tags: string[];
  }[];
}

const CardList = ({ data }: CardListProps) => {
  return (
    <div className='flex flex-col gap-12'>
      {data.map((cardProps) => (
        <Card key={cardProps.title} {...cardProps} />
      ))}
    </div>
  );
};

export default CardList;
