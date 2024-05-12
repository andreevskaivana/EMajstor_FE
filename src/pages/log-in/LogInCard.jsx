import { useState } from "react";
import { Button, Grid, TextField, Container, FormControl } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import axios from "../../config/axios";
import {Link,useNavigate} from "react-router-dom"; // Include BrowserRouter

export const LogInCard = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("api/auth/signin", {
                email: username,
                password: password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/categories");
        } catch (error) {
            navigate("/asset");
            console.error(error);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Container sx={{ mt: 6, mb: 2 }}>
                <Grid container justifyContent="center" alignItems="center"
                      sx={{ mt: 2, mb: 2 }}>
                    <AccountCircleIcon fontSize="large"/>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                    <Typography variant="h6">Најава</Typography>
                </Grid>

                <Grid container spacing={2} justifyContent="center"
                      sx={{ mt: 4, mb: 2 }}>
                    <FormControl sx={{ width: '50%' }}>
                        <TextField
                            id="username"
                            name="username"
                            label="Внесете корисничко име"
                            variant="outlined"
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Внесете лозинка"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Grid container spacing={2} justifyContent="center"
                          sx={{ mt: 2, mb: 2 }}>
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
                            }}
                            onClick={handleLogin}
                        >
                            Најави се
                        </Button>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center"
                          sx={{ mt: 2 }}>
                        <Link to="/register">
                            Немаш профил?
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};
