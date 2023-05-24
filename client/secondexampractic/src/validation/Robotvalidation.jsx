import * as yup from 'yup';

export const robotSchema = yup.object().shape({
    name:yup.string().min(3).max(15).required("name is required"),
    price:yup.number().required(),
    description:yup.string().min(10).max(50).required("description is required"),
    imageURL:yup.string().required("Image is required"),
  });
  