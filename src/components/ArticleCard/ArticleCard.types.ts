import type { Article } from 'src/utils/global.types';

export type ArticleCardProps = Omit<Article, 'id'>;
