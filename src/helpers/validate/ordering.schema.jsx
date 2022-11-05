import * as Yup from 'yup';

export const OrderingSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short').max(20, 'Too Long'),
  lastName: Yup.string().min(2),
  deliveryMethod: Yup.string(),
  street: Yup.string(),
  house: Yup.string(),
  apartment: Yup.string(),
  entrance: Yup.string(),
  floor: Yup.number(),
  code: Yup.string(),
  paymentMethod: Yup.string(),
  email: Yup.string(),
  comment: Yup.string(),
  timeMethod: Yup.string(),
});
