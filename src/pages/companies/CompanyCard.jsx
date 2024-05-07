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
            setJobs(res.data);
        });
    }
    console.log(jobs)
    useEffect(() => {
        fetchJobs();
    }, [id]);

    return (
        <>
            <Container sx={{ mt: 4, mb: 2 }}>
                {Array.isArray(jobs) && jobs.length > 0 && jobs.map(job => (
                    <Card key={job.id} sx={{
                        borderRadius: '12px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        marginBottom: '16px'
                    }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={4}>
                                {/*<CardMedia*/}
                                {/*    component="img"*/}
                                {/*    height="140"*/}
                                {/*    image={provider.image}*/}
                                {/*    alt={provider.name}*/}
                                {/*    sx={{ borderRadius: '12px 0 0 12px' }}*/}
                                {/*/>*/}
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {job.description}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            component={Link}
                                            to={`/details/${job.id}`}
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
