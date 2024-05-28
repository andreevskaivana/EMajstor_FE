import { Container, Typography } from '@mui/material';
import React from 'react';
import error from './assets/error404/error.png';


export const Asset = () => {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>
                Invalid Credentials
            </Typography>
            <img src={error} alt="Error" style={{position: 'relative', right: '1%', width: '100%',height:'230px', display: 'block', margin: '0 auto' }} />
            <Typography variant="body1">
                Please check your username and password and try again.
            </Typography>
        </Container>
    );
};
