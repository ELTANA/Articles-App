import * as yup from 'yup';

export const articleCreationFormSchema = yup.object({
  email: yup.string().trim().email('The email is not valid').required(`Author's Contact Information is required`),
  author: yup.string().trim().required(`Author's Name is required`),
  title: yup.string().trim().required(`Article's Title is required`),
  snippet: yup
    .string()
    .trim()
    .max(300, 'The snippet should not be more than 300 characters')
    .required('Article Snippet is required')
});
export type ArticleCreationFormType = yup.InferType<typeof articleCreationFormSchema>;
