import { Button, Container, Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import logo from '../../media/logo.png';
import '../../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <Box
            sx={{
                background: 'radial-gradient(#ffffff, rgba(129, 108, 97, 0.8))',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Container>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h2" sx={{ color: '#2A2C24', fontWeight: 'bold', fontFamily: 'Oswald' }}>
                                ДОБРЕДОЈДОВТЕ НА
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <img src={logo} alt="logo" style={{ width: '300px' }} />
                        </motion.div>
                    </Grid>
                    <Grid item>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <Typography variant="h5" sx={{ color: '#2A2C24', maxWidth: '600px', mt: 2, fontFamily: 'Oswald' }}>
                                Поврзете се со најдобрите мајстори во вашиот град и добијте професионална услуга со само еден клик!
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item container justifyContent="center" spacing={2} sx={{ mt: 4 }}>
                        <Grid item>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            >
                                <Button
                                    component={Link}
                                    to={`/login`}
                                    sx={{
                                        borderRadius: '20px',
                                        border: '2px solid #2A2C24',
                                        backgroundColor: '#2A2C24',
                                        color: '#ffffff',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        fontFamily: 'Oswald',
                                        '&:hover': {
                                            backgroundColor: '#575A4B',
                                        },
                                    }}
                                >
                                    Најава
                                </Button>
                            </motion.div>
                        </Grid>
                        <Grid item>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            >
                                <Button
                                    component={Link}
                                    to={`/register`}
                                    sx={{
                                        borderRadius: '20px',
                                        border: '2px solid #2A2C24',
                                        backgroundColor: '#2A2C24',
                                        color: '#ffffff',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        fontFamily: 'Oswald',
                                        '&:hover': {
                                            backgroundColor: '#575A4B',
                                        },
                                    }}
                                >
                                    Регистрација
                                </Button>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
