import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../ButtonC'

export default function FormLogin({ onClick, onChangeEmail, onChangePass }) {

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={onChangeEmail}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={onChangePass}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        text='Login'
        onClick={onClick}
      />
    </>
  );
}

