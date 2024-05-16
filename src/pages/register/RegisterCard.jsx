import {useState}  from "react";
import {Button, Grid, TextField, Container, FormControl} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link, useNavigate} from "react-router-dom";
import instance from "../../config/axios.js"
import Typography from "@mui/material/Typography";


export const RegisterCard=()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Лозинките не се совпаѓаат");
            return;
        }
        await instance.post("api/auth/signup", {
            username: username,
            email: email,
            password: password
        }).then(response => {
            if (response.status === 200) {
                navigate("/login");
            }
        }).catch(error => {
            console.error(error);
        });
    };


    return (
        <Grid container justifyContent="center" alignItems="center">
            <Container sx={{mt: 6, mb: 2}}>
                <from onSubmit={handleRegister}>
                    <Grid container justifyContent="center" alignItems="center"
                          sx={{mt: 2, mb: 2 }}>
                        <AccountCircleIcon fontSize="large"/>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography variant="h6">Регистрација</Typography>
                    </Grid>

                    <Grid container spacing={2} justifyContent="center"
                          sx={{mt: 4, mb: 2}}>
                        <FormControl sx={{ width: '45%'}}>
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
                                name="email"
                                label="Внесете e-mail адреса"
                                variant="outlined"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            <TextField
                                id="password"
                                name="password"
                                label="Повтори ја лозинката"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </FormControl>
                        <Grid container spacing={2} justifyContent="center"
                              sx={{mt: 2,mb: 2 }}>
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
                                onClick={handleRegister}
                            >
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
                </from>
            </Container>
        </Grid>
    );
}