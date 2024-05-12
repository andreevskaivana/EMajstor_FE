import { useEffect, useState } from 'react';
import { Button, CardActions, Container, Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from "react-router-dom";
import { JobsService } from "../../services/jobs-service.js"; // Updated import

export const CompanyCard = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);

    const fetchJobs = () => {
        JobsService.fetchJobsByCategory(id).then(res => {
            if (res.data) {
                setJobs(res.data);
            }
        }).catch(error => {
            console.error("Error fetching jobs:", error);
        });
    }

    useEffect(() => {
        fetchJobs();
    }, [id]);

    return (
        <Container sx={{ mt: 4, mb: 4  }}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12}>
                    <Typography align="center">
                        Нудиш некаква услуга која ја нема на листата?
                    </Typography>
                    <a href="#" style={{ display: 'block', textAlign: 'center' }}>Постави ја тука</a>
                </Grid>
            </Grid>

            {Array.isArray(jobs) && jobs.length > 0 && jobs.map(job => (
                <Card key={job.id} sx={{
                    borderRadius: '12px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    marginBottom: '16px'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ textAlign: 'center', padding: '16px', backgroundColor: '#f0f0f0', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                            <Typography variant="h6">{job.title}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CardContent>
                                <Typography variant="body1" gutterBottom>
                                    Опис на работа: {job.description}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                   Цена на услуга: {job.price}
                                </Typography>
                                <CardActions>
                                    <Button
                                        component={Link}
                                        to={`/details/${job.jobProvider.id}`}
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
                                        Контактирај го мајсторот
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Container>
    );
};
