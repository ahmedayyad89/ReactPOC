import checkoutFormModel from './FormModel';
const {
  formField: {
    firstName,
    lastName,
    address,
    city,
    zipcode,
    country,
    gender,
    emailAddress,
    phone,
  }
} = checkoutFormModel;

const getInitialData = (profile) => ({
  [firstName.name]: '',
  [lastName.name]: '',
  [address.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [gender.name]: '',
  [emailAddress.name]: profile.email,
  [phone.name]: '',
});

export default getInitialData;
