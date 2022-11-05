import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import { Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';

import { checkoutOptions } from '../../constants';

import { colors } from '../../constants';
import style from './CheckoutPage.module.scss';

////////////////////////////////////////////////////////////////
import { OrderingSchema } from '../../helpers/validate/ordering.schema';

export const CheckoutPage = () => {
  console.log(OrderingSchema);
  const initialValues = {
    firstName: '',
    lastName: '',
    deliveryMethod: checkoutOptions.DELIVERY_METHOD.COURIER,
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: '',
    code: '',
    paymentMethod: checkoutOptions.PAY_METHOD.CASH,
    email: '',
    comment: '',
    timeMethod: checkoutOptions.TIME_METHOD.NOW,
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const formikOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className={style.checkout}>
      <Container>
        <Title text="Your data" />
        <Formik
          initialValues={initialValues}
          validationSchema={OrderingSchema}
          onSubmit={formikOnSubmit}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First name"
                className={style.halfFieldLeft}
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className={style.halfField}
              />
              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`deliveryMethod${checkoutOptions.DELIVERY_METHOD.COURIER}`}
                    name="deliveryMethod"
                    type="radio"
                    value={checkoutOptions.DELIVERY_METHOD.COURIER}
                  />
                  <label
                    htmlFor={`deliveryMethod${checkoutOptions.DELIVERY_METHOD.COURIER}`}
                  >
                    Courier
                  </label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`deliveryMethod${checkoutOptions.DELIVERY_METHOD.PICKUP}`}
                    name="deliveryMethod"
                    type="radio"
                    value={checkoutOptions.DELIVERY_METHOD.PICKUP}
                  />
                  <label
                    htmlFor={`deliveryMethod${checkoutOptions.DELIVERY_METHOD.PICKUP}`}
                  >
                    Pickup
                  </label>
                </div>
              </div>
              <Field
                id="street"
                name="street"
                placeholder="Street"
                className={style.fullField}
              />
              <Field
                id="house"
                name="house"
                placeholder="House"
                className={style.fullField}
              />
              <Field
                id="apartment"
                name="apartment"
                placeholder="Apartment"
                className={style.halfFieldLeft}
              />
              <Field
                id="entrance"
                name="entrance"
                placeholder="Entrance"
                className={style.halfField}
              />
              <Field
                id="floor"
                name="floor"
                placeholder="Floor"
                className={style.halfFieldLeft}
              />
              <Field
                id="code"
                name="code"
                placeholder="Code"
                className={style.halfField}
              />
              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`paymentMethod${checkoutOptions.PAY_METHOD.CASH}`}
                    name="paymentMethod"
                    type="radio"
                    value={checkoutOptions.PAY_METHOD.CASH}
                  />
                  <label
                    htmlFor={`paymentMethod${checkoutOptions.PAY_METHOD.CASH}`}
                  >
                    Cash
                  </label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`paymentMethod${checkoutOptions.PAY_METHOD.CARD}`}
                    name="paymentMethod"
                    type="radio"
                    value={checkoutOptions.PAY_METHOD.CARD}
                  />
                  <label
                    htmlFor={`paymentMethod${checkoutOptions.PAY_METHOD.CARD}`}
                  >
                    Card
                  </label>
                </div>
              </div>
              <Field
                id="email"
                name="email"
                validate={validateEmail}
                placeholder="E-mail (not necessary)"
                className={style.fullField}
              />
              <Field
                id="comment"
                name="comment"
                placeholder="Сomment to the order"
                className={style.fullField}
              />
              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`timeMethod${checkoutOptions.TIME_METHOD.NOW}`}
                    name="timeMethod"
                    type="radio"
                    value={checkoutOptions.TIME_METHOD.NOW}
                  />
                  <label
                    htmlFor={`timeMethod${checkoutOptions.TIME_METHOD.NOW}`}
                  >
                    Now
                  </label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`timeMethod${checkoutOptions.TIME_METHOD.AT_THE_TIME}`}
                    name="timeMethod"
                    type="radio"
                    value={checkoutOptions.TIME_METHOD.AT_THE_TIME}
                  />
                  <label
                    htmlFor={`timeMethod${checkoutOptions.TIME_METHOD.AT_THE_TIME}`}
                  >
                    At the time
                  </label>
                </div>
              </div>
              <Button variant="contained" sx={styles.forButton} type="submit">
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

const styles = {
  forButton: {
    mt: '20px',
    minWidth: '330px',
    textTransform: 'none',
    backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '5px 65px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: colors.MAIN_ACCENT_COLOR,
    },
  },
};
