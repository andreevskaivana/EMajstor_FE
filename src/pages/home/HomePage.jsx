import { Button, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import logo from '../../media/logo.png';
import '../../index.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <Container sx={{ mt: 6, mb: 2 }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Typography variant="h4">
                        Добредојдовте на Е-Мајстор
                    </Typography>
                </Grid>
                <Grid item >
                    <img src={logo} alt="logo" />
                </Grid>
                <Grid item container justifyContent="center" spacing={2}
                      sx={{ mt: 6, mb: 2 }}>
                    <Grid item>
                        <Button
                            component={Link}
                            to={`/login`}
                            sx={{
                                borderRadius: '20px',
                                border: '1px solid #2A2C24',
                                backgroundColor: '#2A2C24',
                                color: '#fff',
                                '&:hover': {
                                backgroundColor: '#575A4B',
                            },
                            }}
                        >
                            Најава
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to={`/register`}
                            sx={{
                                borderRadius: '20px',
                                border: '1px solid #2A2C24',
                                backgroundColor: '#2A2C24',
                                color: '#fff',
                                '&:hover': {
                                backgroundColor: '#575A4B',
                            },
                            }}
                        >
                            Регистрација
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};