import Button from '$components/Button/Button';
import Input from '$components/Input/Input';
import { getArticles } from '$network/article';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

const Results: FC = () => {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles
  });

  console.log(data);

  return (
    <section className="grow flex flex-col items-center">
      <div className="max-w-[640px] w-full mx-auto mb-12 md:mb-24">
        <h1 className="text-center sm:text-5xl text-3xl mb-4 text-gray-900 font-semibold">Search for articles</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-1 items-center w-full"
        >
          <Input type="search" name="search" placeholder="Search" />
          <Button type="submit" text="Search" />
        </form>
      </div>
      <div className="">
        <h2 className="sm:text-3xl text-xl font-medium underline">Results</h2>
        <div></div>
      </div>
    </section>
  );
};

export default Results;
