import { useEffect, useState } from 'react';
import { Button, CardActions, Container, Grid, Card, Select, MenuItem } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from "react-router-dom";
import { JobsService } from "../../services/jobs-service.js";
import { CompanyRating } from "../rating/CompanyRating.jsx";

export const CompanyCard = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    }

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

    const sortJobsByPrice = () => {
        const sortedJobs = [...jobs];
        sortedJobs.sort((a, b) => {
            if (sortOrder === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setJobs(sortedJobs);
    }

    useEffect(() => {
        sortJobsByPrice();
    }, [sortOrder]);

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="body2" color="textSecondary">
                Подреди ги ислугите според цена
            </Typography>
            <Select
                value={sortOrder}
                onChange={handleSortChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Sort Order' }}
                sx={{ marginBottom: '20px' }}
            >
                <MenuItem value="asc">Најниски до највисоки цени</MenuItem>
                <MenuItem value="desc">Највисоки до најниски цени</MenuItem>
            </Select>

            {Array.isArray(jobs) && jobs.length > 0 && jobs.map(job => (
                <Card key={job.id} sx={{
                    borderRadius: '12px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    marginBottom: '16px'
                }}>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sx={{
                            textAlign: 'center',
                            padding: '16px',
                            backgroundColor: '#f0f0f0',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px'
                        }}>
                            <Typography variant="h6">{job.title}</Typography>
                        </Grid>
                        <Grid container item xs={12} spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1" gutterBottom>
                                        Опис на работа: {job.description}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Цена на услуга: {job.price}
                                    </Typography>
                                    <Grid container justifyContent="center">
                                        <Grid item>
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
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1" gutterBottom>
                                        Просечна оцена на услуга: {job.number_reviews > 0 ? (job.total_grades / job.number_reviews).toFixed(2) : "Нема оцени"}
                                    </Typography>
                                    <CompanyRating jobId={job.id} />
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Container>
    );
};
