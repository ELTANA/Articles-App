import type { Article } from 'src/utils/global.types';
import instance from './axios';
import Endpoints from './endpoints';

export const postArticle = async (payload: Article): Promise<string> => {
  const res = await instance.post(Endpoints.ARTICLES, payload);
  return res.data;
};
