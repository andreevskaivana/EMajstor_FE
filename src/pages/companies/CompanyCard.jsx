import companiesData from '../../assets/companies.json';
import React, { useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions, Container, Grid, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

export const CompanyCard = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies(companiesData.companies);
    }, []);

    return (
        <>
            <Container sx={{ mt: 4, mb: 2 }}>
                {companies.map((company) => (
                    <Card key={company.id} sx={{
                        borderRadius: '12px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '16px'
                    }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={4}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={company.image}
                                    alt={company.name}
                                    sx={{ borderRadius: '12px 0 0 12px' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {company.description}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            component={Link}
                                            to={`/details`}
                                            sx={{
                                                color: "#575A4B",
                                                borderRadius: '20px',
                                                border: `1px solid #2A2C24`,
                                                '&:hover': {
                                                    backgroundColor: '#2A2C24',
                                                    color: '#fff',
                                                }
                                            }}
                                        >
                                            Контакт
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </Container>
        </>
    );
};
