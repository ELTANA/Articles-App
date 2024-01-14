import ArticleCard from '$components/ArticleCard/ArticleCard';
import Button from '$components/Button/Button';
import Input from '$components/Input/Input';
import Pagination from '$components/Pagination/Pagination';
import { getArticles } from '$network/article';
import { ARTICLES_KEY, ARTICLES_PER_PAGE } from '$utils/constant';
import type { Article } from '$utils/global.types';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useRef, useState } from 'react';

const Results: FC = () => {
  //state
  const [results, setResults] = useState<Article[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  //refs
  const inputRef = useRef<HTMLInputElement | null>(null);

  //queries
  const { data, isPending } = useQuery({
    queryKey: [ARTICLES_KEY],
    queryFn: getArticles
  });

  useEffect(() => {
    if (data) {
      const sessionStorageData = sessionStorage.getItem(ARTICLES_KEY);
      const parsedArticles = sessionStorageData ? (JSON.parse(sessionStorageData) as Article[]) : [];
      setResults(
        [...parsedArticles, ...data].filter(
          (article) =>
            article.author.toLowerCase().includes(search.toLowerCase()) ||
            article.email.toLowerCase().includes(search.toLowerCase()) ||
            article.snippet.toLowerCase().includes(search.toLowerCase()) ||
            article.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [data, search]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = results?.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <section className="grow flex flex-col items-center">
      <div className="max-w-[640px] w-full mx-auto mb-12 md:mb-24">
        <h1 className="text-center sm:text-5xl text-3xl mb-4 text-gray-900 font-semibold">Search for articles</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef) {
              setSearch(inputRef?.current?.value ?? '');
            }
          }}
          className="flex flex-col gap-1 items-center w-full"
        >
          <Input
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            inputRef={inputRef}
            type="search"
            name="search"
            placeholder="Search"
          />
          <Button type="submit" text="Search" />
        </form>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="sm:text-3xl text-xl font-medium underline mb-3">Results {search && `for "${search}"`}</h2>
        {isPending ? (
          <p className="text-center text-base">Loading</p>
        ) : (
          <div className="flex flex-wrap md:-mx-4 -mb-10 text-center w-full justify-start">
            {currentArticles?.map(({ id, ...rest }) => (
              <div key={id} className="w-full md:w-1/2 lg:w-1/3 mb-10 md:px-4">
                <ArticleCard {...rest} />
              </div>
            ))}
          </div>
        )}
        <Pagination currentPage={currentPage} perPage={ARTICLES_PER_PAGE} total={results?.length} paginate={paginate} />
      </div>
    </section>
  );
};

export default Results;
