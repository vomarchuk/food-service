import { Formik, Form, Field, FormikHelpers, useField } from 'formik';
import { useState } from 'react';
import { beckEnd } from '../../goods';

import { Button, Modal, Box } from '@mui/material';
import { Container } from '../../components/Container';
import { ReviewsList } from '../../components/ReviewsList';

import { colors } from '../../constants';

import style from './FeedbackPage.module.scss';

export const FeedbackPage = () => {
  const [open, setOpen] = useState(false);

  const reviews = beckEnd.reviews;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MyTextArea = ({ label, ...props }) => {
    console.log(props);

    const [field, meta] = useField(props);

    return (
      <>
        <label>{label}</label>
        <textarea {...field} {...props} />
      </>
    );
  };

  return (
    <Container>
      <h2 className={style.title}>Reviews</h2>
      <ReviewsList reviews={reviews} />
      <Button
        variant="contained"
        type="button"
        sx={styles.forButton}
        onClick={handleOpen}
      >
        + Add a review
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styless, width: 200 }}>
          <h2>Add a review</h2>
          <Formik
            initialValues={{
              name: '',
              description: '',
            }}
            onSubmit={({ setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <MyTextArea
                label="Description"
                name="Description"
                rows="5"
                maxLength="120"
                className={style.s}
              />

              <button type="submit">Submit</button>
            </Form>
          </Formik>

          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </Container>
  );
};

const styles = {
  forBox: {
    mt: '10px',
    p: '10px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  forButton: {
    mt: '20px',
    minWidth: '330px',
    textTransform: 'none',
    backgroundColor: colors.MAIN_DARK_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    fontFamily: 'DIN Pro',

    fontSize: '18px',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: colors.MAIN_ACCENT_COLOR,
    },
  },
};

const styless = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
