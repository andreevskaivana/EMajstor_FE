import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Button, CardActions, Container, Grid, Card, Modal, FormControl, Input} from '@mui/material';
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-project-modal-title"
                aria-describedby="add-project-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3
                    }}
                >
                    <Typography variant="body1" mt={2} mb={2} align="center" sx={{fontFamily: "sans-serif"}}>
                        Креирај оглас
                    </Typography>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси име на услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси опис на услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси цена за услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Одбери категорија за услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси име на компанијата"}/>
                    </FormControl>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                        <Button sx={{
                            color: "#575A4B",
                            borderRadius: '20px',
                            border: `1px solid #2A2C24`,
                            '&:hover': {
                                backgroundColor: '#2A2C24',
                                color: '#fff',
                            }
                        }} onClick={handleClose}>КРЕИРАЈ</Button>
                    </Box>
                </Box>
            </Modal>
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
                                padding: '16px',
                                backgroundColor: '#f0f0f0',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }}>
                                <Typography variant="h6">{provider.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {provider.description}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {provider.location.city}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                        <CardActions sx={{justifyContent: 'center'}}>
                            <Button
                                component={Link}
                                to={`/rating`}
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
                                закажи термин
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Container>
        </>
    );
};
