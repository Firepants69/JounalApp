import {Link as RouterLink} from "react-router-dom"
import { Grid, TextField, Typography, Button,Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSingIn} from "../../store/auth"
import { useDispatch } from "react-redux"

export const LoginPage = () => {
  
  const dispatch = useDispatch();  
  const {email,password,onInputChange} = useForm({
    email:'humer-merlin@hotmail.com',
    password:'12345'
  });
  
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(email,password);
    dispatch(checkingAuthentication());
  }

  const onGoogleSingIn = () =>{
    console.log("onGoogleSingIn");
    dispatch(startGoogleSingIn())
  }

 

  return (
        <AuthLayout title="login">

        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs = {12} md = {12} sx={{mt:2}}>
                  <TextField 
                  label= "correo" 
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  name = "email"
                  value={email}
                  onChange={onInputChange}
                  ></TextField>
                </Grid>

                <Grid item xs = {12}  md = {12} sx={{mt:2}}>
                  <TextField 
                  label= "contraseña" 
                  type="password"
                  placeholder="********"
                  fullWidth
                  name = "password"
                  value={password}
                  onChange={onInputChange}
                  ></TextField>
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid item xs= {12} sm = {6}>
                        <Button type="submit" variant="contained" fullWidth onClick={checkingAuthentication}>
                          Login
                        </Button>
                    </Grid>
                    <Grid item xs= {12} sm = {6}>
                        <Button 
                          variant="contained" 
                          fullWidth
                          onClick={onGoogleSingIn}>
                          <Google/>
                          <Typography sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to = '/auth/register'>
                          Crear una cuenta
                          </Link>
                    </Grid>
                
                </Grid>
                
            </Grid>
          </form>
        </AuthLayout>
  )
}

