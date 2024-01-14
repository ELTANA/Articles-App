import * as yup from 'yup';

export const articleCreationFormSchema = yup.object({
  email: yup.string().trim().email('The email is not valid').required('This field is required'),
  phoneNumber: yup.string().trim().required('This field is required'),
  author: yup.string().trim().required('This field is required'),
  title: yup.string().trim().required('This field is required'),
  snippet: yup
    .string()
    .trim()
    .max(300, 'The snippet should not be more than 300 characters')
    .required('This field is required')
});
export type ArticleCreationFormType = yup.InferType<typeof articleCreationFormSchema>;
