import React from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  Typography,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "25px",
  bgcolor: "background.paper",
  border: "1px solid #0F2944",
  boxShadow: 24,
  p: 4,
};

const styleCard = {
  border: "1px solid #0F2944",
  backgroundColor: "background.paper",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
  position: "absolute",
  
  

};

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <Container>
        {/* Modals */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography sx={{ marginBottom: "20px" }}>
              Antes de continuar com o cadastro, tenha certeza dos pontos
              abaixo:
            </Typography>
            <form
              onSubmit={() => {
                navigate("/notes");
              }}
            >
              <FormControl required error>
                <FormGroup>
                  <FormControlLabel
                    required
                    control={<Checkbox name="dnv" defaultValue={false} />}
                    label="Cliente trouxe declaração de nascido vivo(DNV)?"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox name="corDnv" defaultValue={false} />}
                    label="A cor da DNV é Amarela?"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox name="dnvLegivel" defaultValue={false} />
                    }
                    label="A DNV está legível?"
                  />

                  <Button
                    sx={{ marginTop: "20px" }}
                    variant="outlined"
                    type="submit"
                  >
                    Continuar
                  </Button>
                </FormGroup>
              </FormControl>
            </form>
          </Box>
        </Modal>

        {/* Links */}
        
        <Box my={4}
          alignItems="center"
          gap={4}
          p={2}>
          <Typography variant="h5">Procure o seu cliente pelo CPF</Typography>
          <TextField id="filled-basic" label="CPF" variant="standard"  size="small"  />
          <Button
                    sx={{ marginTop: "15px", marginLeft: "15px" }}
                    variant="outlined"
                    type="submit"
                  >
                    Pesquisar
                  </Button>
        </Box>

        <Box
          my={4}
          display="grid"
          alignItems="center"
          gap={4}
          p={2}
          sx={ styleCard }
        >
          <Typography sx={{ textAlign: "center" }} variant="h4">Nascimento</Typography>
          <Button variant="text" onClick={handleOpen} sx={{ textDecoration: "underline" }} >
            Registrar Nascimento
          </Button>
          <Button variant="text" onClick={handleOpen} sx={{ textDecoration: "underline"  }}>
            2 via de Certidões do Registro
          </Button>
          <Button variant="text" onClick={handleOpen} sx={{ textDecoration: "underline"  }}>
            Averbações e Anotações
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
