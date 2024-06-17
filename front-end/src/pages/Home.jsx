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
  FormControl,
} from "@mui/material";

const style = {
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
          <Box sx={style}>
            <Typography sx={{ marginBottom: "20px" }}>
              Antes de continuar com o cadastro, tenha certeza dos pontos
              abaixo:
            </Typography>
            <form
              onSubmit={() => {
                navigate("/notes")
              }}
            >
              <FormControl required error>
                <FormGroup>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        name="dnv"
                        defaultValue={false}
                      />
                    }
                    label="Cliente trouxe declaração de nascido vivo(DNV)?"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        name="corDnv"
                        defaultValue={false}
                      />
                    }
                    label="A cor da DNV é Amarela?"
                  />
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        name="dnvLegivel"
                        defaultValue={false}
                      />
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
        <Box my={4}>
          <Typography variant="h1">Home</Typography>
        </Box>
        <Box my={4} display="flex" alignItems="center" gap={4} p={2} sx={{}}>
          <Button variant="contained" onClick={handleOpen}>
            Registrar Nascimento
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
