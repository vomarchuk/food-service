import * as Yup from 'yup';

export const OrderingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short')
    .max(20, 'Too Long')
    .matches(/^[a-zA-Z]+$/)
    .required(),
  lastName: Yup.string()
    .min(2, 'Too Short')
    .max(20, 'Too Long')
    .matches(/^[a-zA-Z]+$/)
    .required(),
  deliveryMethod: Yup.string(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  house: Yup.string().required(),
  apartment: Yup.string().required(),
  paymentMethod: Yup.string(),
  email: Yup.string().email(),
  comment: Yup.string().min(10).max(100, 'Too Long'),
  timeMethod: Yup.string(),
});
