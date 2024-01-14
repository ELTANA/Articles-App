import type { Article } from 'src/utils/global.types';
import instance from './axios';
import Endpoints from './endpoints';
import type { AxiosResponse } from 'axios';

export const postArticle = async (payload: Omit<Article, 'id'>): Promise<Article> => {
  const res = await instance.post<Article, AxiosResponse<Article>>(Endpoints.ARTICLES, payload);
  return res.data;
};

export const getArticles = async (): Promise<Article[]> => {
  const res = await instance.get<Article[]>(Endpoints.ARTICLES);
  return res.data;
};
