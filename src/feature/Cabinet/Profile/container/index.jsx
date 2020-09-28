import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  Grid,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import PaymentForm from './Forms/UploadForm';
import ReviewOrder from './Review';
import CheckoutSuccess from './CheckoutSuccess';
import MaterialLayout from '../Layout/MaterialLayout';
import { firstStepForIndividual, firstStepForNonIndividual } from './FormModal/validationSchema';
import getInitialData from './FormModal/formInitialValues';
import AddressForm from './Forms/AddressForm';
import useStyles from './styles';
import { generateLocationAuthToken, getCountries } from "../../../API/locationActions";
import { userType, userTypeOptions } from "../../../../config/constants";

const steps = ['Details', 'Uploads', 'Review'];

function StepContent({ step, profile }) {
  switch (step) {
    case 0:
      return <AddressForm profile={profile} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

const getValidationSchema = (step, profile) => {
  let schema = null;

  switch(step) {
    case 0:
      schema = (profile.user_type === userType.individual) ? firstStepForIndividual : firstStepForNonIndividual;
      break;
    case 1:
      break;
    default:
  }

  return schema;
};

export const Profile = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const {
    location,
    generateLocationAuthToken,
    getCountriesAction,
    profile,
  } = props;

  useEffect(() => {
    const getLocationAuthToken = async () => {
      if(!location.authToken) {
        return generateLocationAuthToken();
      }
    };

    const getCountries = async () => {
      const token = await getLocationAuthToken();
      if(token) {
        getCountriesAction();
      }
    };

    getCountries();
  }, []);

  async function handleSubmit(values, actions) {
    if (isLastStep) {
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
      <React.Fragment>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <CheckoutSuccess />
          ) : (
            <Formik
              initialValues={getInitialData(profile)}
              validationSchema={getValidationSchema(activeStep, profile)}
              onSubmit={handleSubmit}
              validateOnBlur={true}
              validateOnChange={false}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Grid container spacing={3} direction='row-reverse'>
                    <Grid item xs={12} sm={3}>
                      <Select data={userTypeOptions} value={profile.user_type} disabled className={classes.typeSelector} fullWidth>
                        { userTypeOptions.map((item, index) => (
                            <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
                        )) }
                      </Select>
                    </Grid>
                  </Grid>

                  <StepContent step={activeStep} profile={profile} />

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? 'Place order' : 'Next'}
                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </React.Fragment>
      </React.Fragment>
  );
};

Profile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.cabinet.users.isLoading,
  users: state.cabinet.users.data,
  profile: state.auth.signin.user,
  location: state.location,
});

const mapDispatchToProps = {
  generateLocationAuthToken,
  getCountriesAction: getCountries,
};

export const ProfileContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Profile)
);
