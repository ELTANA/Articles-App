import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '$components/Input/Input';
import TextArea from '$components/Input/TextArea';
import Button from '$components/Button/Button';
import { ArticleCreationFormType, articleCreationFormSchema } from './ArticleCreation.types';
import { useMutation } from '@tanstack/react-query';
import { postArticle } from '$network/article';

const ArcticleCreation: FC = () => {
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
      phoneNumber: '',
      snippet: ''
    }
  });
  //api integration
  const { mutate, isPending, data } = useMutation({
    mutationFn: postArticle
  });

  console.log(data);

  return (
    <section className="grow py-5 max-w-[768px] w-full mx-auto">
      <h1 className="text-gray-900 text-xl sm:text-4xl mb-2 font-semibold">Create an article</h1>
      <p className="leading-relaxed mb-10 text-gray-600">
        Fill the form with details of your article, so it can be added to the articles list.
      </p>
      <form
        onSubmit={handleSubmit(async ({ author, email, phoneNumber, snippet }) => {
          mutate({
            author,
            email,
            phoneNumber,
            snippet
          });
          reset();
        })}
        className="flex flex-col items-start gap-4"
      >
        <Input {...register('author')} error={errors.author} name="author" label="Author" />
        <Input {...register('email')} error={errors.email} name="email" label="Email" type="email" />
        <Input {...register('phoneNumber')} error={errors.phoneNumber} name="phoneNumber" label="Phone number" />
        <TextArea
          {...register('snippet')}
          error={errors.snippet}
          name="snippet"
          label="Snippet (Max — 300 characters)"
        />
        <Button disabled={isPending} loading={isPending} type="submit" text="Create Article" />
      </form>
    </section>
  );
};

export default ArcticleCreation;
