import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Input, FormHelperText} from '@mui/material';
import Grid from "@mui/material/Grid";

const Login = () => {
  const [login,setLogin] = useState('');
  return (
    <div>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_name" aria-describedby="login_name_helper_text" value={login}
                 onChange={e => { setLogin(e.target.value)}}/>
          <FormHelperText id="login_name_helper_text">Login</FormHelperText>
        </FormControl>
      </Grid>
      
    </div>
  );
}

export default Login;