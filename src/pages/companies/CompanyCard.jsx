import companiesData from '../../assets/companies.json';
import React, { useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions, Container, Grid, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CompanyCard = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies(companiesData.companies);
    }, []);

    return (
        <>
            <Container sx={{ mt: 4, mb: 2 }}>
                {companies.map((company) => (
                    <Grid container spacing={4} key={company.id} >
                        <Grid item xs={12} sm={4}>
                            <img
                                src={company.image}
                                alt={company.name}
                                style={{ width: '100%', height: 'auto', maxHeight: '100px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container direction="column" spacing={2}sx={{alignItems:'center'}}>
                                <Grid item>
                                    <Typography variant="body1">{company.description}</Typography>
                                </Grid>
                                <Grid item >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#575A4B",
                                            borderRadius: '20px',
                                            border: `1px solid #2A2C24`,
                                        }}
                                    >
                                        Контакт
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Container>
        </>
    );
};
