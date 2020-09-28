import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import UploadField from "../../FormFields/UploadField";

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography variant="h5" paragraph={true} gutterBottom>
            Passport
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <UploadField />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" paragraph={true} gutterBottom>
            Driving License
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <UploadField />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" paragraph={true} gutterBottom>
            Others
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <UploadField />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
