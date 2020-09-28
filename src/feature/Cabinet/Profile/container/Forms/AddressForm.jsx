import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { InputField, SelectField } from '../../FormFields';
import { useSelector, useDispatch } from 'react-redux';
import { gender as genderData } from "config/constants";
import { validatePhone } from "../FormModal/phoneValidator";
import checkoutFormModel from "../FormModal/FormModel";
import { getStates, getCities } from "../../../../API/locationActions";
import { userType } from "config/constants";

const { formField } = checkoutFormModel;

const CountryField = (props) => {
  const { country } = formField;
  const { countries }  = useSelector(state => state.location);
  const { values } = useFormikContext();
  const dispatch = useDispatch();

  const countryValue = values[country.name];

  useEffect(() => {
    if(countryValue) {
      dispatch(getStates(countryValue));
    }
  }, [countryValue]);

  return (
      <SelectField name={country.name} label={country.label} data={countries} fullWidth />
  );
};

const StateField = (props) => {
  const { country, state, city } = formField;
  const { states }  = useSelector(state => state.location);
  const { values, setFieldValue } = useFormikContext();
  const dispatch = useDispatch();

  const countryValue = values[country.name];
  const stateValue = values[state.name];

  useEffect(() => {
    setFieldValue(state.name, '');
  }, [countryValue]);

  useEffect(() => {
    if(stateValue) {
      dispatch(getCities(stateValue));
    }
  }, [stateValue]);

  return (
      <SelectField name={state.name} label={state.label} data={states} fullWidth />
  );
};

const CityField = (props) => {
  const { country, state, city } = formField;
  const { cities }  = useSelector(state => state.location);
  const { values, setFieldValue } = useFormikContext();

  const countryValue = values[country.name];
  const stateValue = values[state.name];

  useEffect(() => {
    setFieldValue(city.name, '');
  }, [countryValue, stateValue]);

  return (
      <SelectField name={city.name} label={city.label} data={cities} fullWidth />
  );
};

export default function AddressForm({ profile }) {
  const {
    firstName, lastName, address, zipcode, emailAddress, phone, gender
  } = formField;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField name={emailAddress.name} label={emailAddress.label} disabled={true} fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={phone.name} label={phone.label} fullWidth validate={validatePhone} />
        </Grid>

        { profile.user_type === userType.individual && (
          <Grid item xs={12} sm={6}>
            <SelectField name={gender.name} label={gender.label} data={genderData} fullWidth />
          </Grid>
        ) }

        <Grid item xs={12} sm={6}>
          <CountryField />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StateField />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CityField />
        </Grid>

        { profile.user_type === userType.individual && (
          <>
            <Grid item xs={12} sm={6}>
              <InputField name={address.name} label={address.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField name={zipcode.name} label={zipcode.label} fullWidth />
            </Grid>
          </>
        ) }
      </Grid>
    </React.Fragment>
  );
}
