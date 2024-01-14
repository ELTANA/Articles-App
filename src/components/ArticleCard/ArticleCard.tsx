import { FC } from 'react';
import { IArticleCardProps } from './ArticleCard.types';

const ArticleCard: FC<IArticleCardProps> = ({ author, email, phoneNumber, snippet }) => {
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 mb-10 px-4">
      <div className="rounded-lg shadow-sm transition-all hover:shadow-md pb-12 border-2 border-purple-100">
        <h3 className="text-2xl font-medium text-gray-900 mt-6 mb-3">{author}</h3>
        <p className="text-lg font-medium mt-6">{email}</p>
        <p className="text-lg font-medium mt-6">{phoneNumber}</p>
        <p className="leading-relaxed text-base">{snippet}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
