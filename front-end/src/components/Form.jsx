import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import {
  Container,
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Avatar,
  TextField,
  Grid,
  Link
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'



function FormDefault({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const name = method === "login" ? "Entrar" : "Cadastrar-se";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } 
  };

  return (
    <>

      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           {name}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuário"
              name="user"
              autoComplete="user"
              autoFocus
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mantenha-me conectado"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Faça seu cadastro"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>








      
    </>
  );
}

export default FormDefault;
