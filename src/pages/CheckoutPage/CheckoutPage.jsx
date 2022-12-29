import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDeliveryInfo } from '../../redux/delivery/actions';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import { Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';

import { checkoutOptions, colors } from '../../constants';
import { deliveryInitialState } from '../../helpers';

import style from './CheckoutPage.module.scss';

import { OrderingSchema } from '../../helpers/validate/ordering.schema';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isValid = (error, className) =>
    `${style[`${className}`]}  ${error && style['is-Not-Valid']}`;

  const formikOnSubmit = (values) => {
    dispatch(addDeliveryInfo(values));
    navigate('/cart', { replace: true });
  };

  return (
    <section className={style.checkout}>
      <Container>
        <Title text="Your data" />
        <Formik
          initialValues={deliveryInitialState}
          validationSchema={OrderingSchema}
          onSubmit={formikOnSubmit}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              {/* {errors && touched ? console.log(errors) : null} */}
              <Field
                id="firstName"
                name="firstName"
                placeholder="First name"
                className={isValid(errors.firstName, 'halfFieldLeft')}
              />
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className={isValid(errors.lastName, 'halfField')}
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
                id="city"
                name="city"
                placeholder="city"
                className={isValid(errors.city, 'fullField')}
              />
              <Field
                id="street"
                name="street"
                placeholder="Street"
                className={isValid(errors.street, 'fullField')}
              />
              <Field
                id="house"
                name="house"
                placeholder="House"
                className={isValid(errors.house, 'halfFieldLeft')}
              />
              <Field
                id="apartment"
                name="apartment"
                placeholder="Apartment"
                className={isValid(errors.apartment, 'halfField')}
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
                placeholder="E-mail (not necessary)"
                className={isValid(errors.email, 'fullField')}
              />
              <Field
                id="comment"
                name="comment"
                placeholder="Comment to the order"
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
