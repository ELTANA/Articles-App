import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '$components/Input/Input';
import TextArea from '$components/Input/TextArea';
import Button from '$components/Button/Button';
import { ArticleCreationFormType, articleCreationFormSchema } from './ArticleCreation.types';
import { useMutation } from '@tanstack/react-query';
import { postArticle } from '$network/article';
import { ARTICLES_KEY } from '$utils/constant';
import type { Article } from '$utils/global.types';
import { useNavigate } from '@tanstack/react-router';
import { generateUniqueString } from '$utils/functions';
import toast from 'react-hot-toast';
const ArticleCreation: FC = () => {
  //form validation
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit
  } = useForm<ArticleCreationFormType>({
    mode: 'all',
    resolver: yupResolver(articleCreationFormSchema),
    defaultValues: {
      author: '',
      email: '',
      snippet: '',
      title: ''
    }
  });
  //api integration
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: postArticle
  });

  const navigate = useNavigate({ from: '/create' });

  //
  const createArticle = () =>
    // e.preventDefault();
    handleSubmit(async ({ author, email, snippet, title }) => {
      mutate({
        author,
        email,
        snippet,
        title
      });

      const sessionStorageData = sessionStorage.getItem(ARTICLES_KEY);
      const parsedArticles = sessionStorageData ? (JSON.parse(sessionStorageData) as Article[]) : [];
      sessionStorage.setItem(
        ARTICLES_KEY,
        JSON.stringify([
          ...parsedArticles,
          {
            author,
            email,
            snippet,
            title,
            id: generateUniqueString()
          }
        ])
      );
      reset();
    });

  if (isSuccess) {
    toast.success('Created Article successfully', {
      position: 'top-center',
      duration: 3000
    });
    navigate({ to: '/' });
  }

  return (
    <section className="grow py-5 max-w-[768px] w-full mx-auto">
      <h1 className="text-gray-900 text-xl sm:text-4xl mb-2 font-semibold">Create an article</h1>
      <p className="leading-relaxed mb-10 text-gray-600">
        Fill the form with details of your article, so it can be added to the articles list.
      </p>
      <form onSubmit={createArticle()} className="flex flex-col items-start gap-4">
        <Input {...register('author')} error={errors.author} name="author" label="Author's Name" />
        <Input {...register('email')} error={errors.email} name="email" label="Author's Contact Email" type="email" />
        <Input {...register('title')} error={errors.title} name="title" label="Article's Title" />
        <TextArea
          {...register('snippet')}
          error={errors.snippet}
          name="snippet"
          label="Article's Snippet (Max — 300 characters)"
        />
        <Button disabled={isPending} loading={isPending} type="submit" text="Create Article" role="button" />
      </form>
    </section>
  );
};

export default ArticleCreation;
