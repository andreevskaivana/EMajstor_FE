import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Button, CardActions, Container, Grid, Card, Modal, FormControl, Input, CardMedia} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import ProviderService from "../../services/provider-service.js";
import Box from "@mui/material/Box";

export const CompanyDetails = () => {
    const {id} = useParams();
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const fetchProviders = () => {
        setLoading(true);
        ProviderService.fetchProvidersByJob(id)
            .then(res => {
                console.log("Response data:", res.data);
                if (res.data) {
                    setProviders([res.data]);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error("Error fetching providers:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProviders();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container sx={{mt: 4, mb: 2}}>
                {providers.map(provider => (
                    <Card key={provider.id} sx={{
                        borderRadius: '12px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '16px'
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{
                                textAlign: 'center',
                                backgroundColor: '#575A4B',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }}>
                                <Typography variant="h5" sx={{
                                    mt: 1,
                                    mb: 1,
                                    color: 'white',
                                    fontFamily: 'Oswald'
                                }}>{provider.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{textAlign: 'center'}}>
                                <CardMedia
                                    component="img"
                                    image={provider.imageUrl}
                                    alt={provider.name}
                                    sx={{borderRadius: '12px', maxHeight: '200px', width: '100%', objectFit: 'cover'}}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CardContent>
                                    <Typography gutterBottom sx={{fontWeight: 'medium',fontFamily: 'Oswald'}}>
                                        Повеќе околу компанијата:
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {provider.description}
                                    </Typography>
                                    <Typography  gutterBottom sx={{fontWeight: 'medium',fontFamily: 'Oswald'}}>
                                        Телефонски број:
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {provider.phoneNumber}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <CardContent>
                                    <Typography gutterBottom sx={{fontWeight: 'medium',fontFamily: 'Oswald'}}>
                                        Локација на компанијата:
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {provider.location}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </Container>
        </>
    );
};
