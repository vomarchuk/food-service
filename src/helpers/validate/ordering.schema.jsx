import * as Yup from 'yup';

export const OrderingSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short').max(20, 'Too Long').required(),
  lastName: Yup.string().min(2, 'Too Short').max(20, 'Too Long').required(),
  deliveryMethod: Yup.string().required(),
  street: Yup.string(),
  house: Yup.string(),
  apartment: Yup.string(),
  entrance: Yup.string(),
  floor: Yup.number(),
  code: Yup.string(),
  paymentMethod: Yup.string().required(),
  email: Yup.string(),
  comment: Yup.string(),
  timeMethod: Yup.string(),
});
