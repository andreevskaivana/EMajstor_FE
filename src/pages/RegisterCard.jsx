import {Button, Grid, TextField, Container, FormControl} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export const RegisterCard=()=>{
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Container sx={{mt: 6, mb: 2}}>
                <Grid container justifyContent="center" alignItems="center"
                      sx={{
                          mt: 2,
                          mb: 2
                      }}>
                    <AccountCircleIcon fontSize="large"/>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Typography variant="h6">Регистрација</Typography>
                </Grid>

                <Grid container spacing={2} justifyContent="center"
                      sx={{
                          mt: 4,
                          mb: 2
                      }}>
                    <FormControl sx={{ width: '45%'}}>
                        <TextField
                            id="username"
                            name="username"
                            label="Внесете корисничко име"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            name="email"
                            label="Внесете e-mail адреса"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Внесете лозинка"
                            type="password"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Повтори ја лозинката"
                            type="password"
                            variant="outlined"
                            margin="normal"
                        />
                    </FormControl>
                    <Grid container spacing={2} justifyContent="center"
                          sx={{
                              mt: 2,
                              mb: 2
                          }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#2A2C24',
                                '&:hover': {
                                    backgroundColor: '#575A4B',
                                    color: '#fff',
                                },
                                color: '#fff',
                                borderRadius: '12px',
                            }}>
                            Регистрирај се
                        </Button>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center"
                          sx={{mt:2}}>
                        <Link to="/login">
                            Имаш профил?
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}