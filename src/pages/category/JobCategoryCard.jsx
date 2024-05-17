import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    Button,
    CardActionArea,
    CardActions,
    Grid,
    Container,
    CardMedia,
    Modal,
    FormControl,
    Input
} from '@mui/material';
import { Link } from "react-router-dom";
import { CategoryService } from "../../services/category-service.js";
import Box from "@mui/material/Box";

export const JobCategoryCard = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        CategoryService.fetchAllCategories().then(res => {
            setCategories(res.data);
        });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Container sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={2}>
                {categories.map(category => (
                    <Grid item key={category.id} xs={12} sm={6} md={4}>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '12px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>
                            <CardActionArea sx={{ flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={category.imageUrl}
                                    alt={category.name}
                                    sx={{ borderRadius: '12px 12px 0 0' }}
                                />
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '50px',
                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%',
                                            fontFamily: 'Oswald'}}
                                    >
                                        {category.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingBottom: 2,
                            }}>
                                <Button
                                    component={Link}
                                    to={`/jobs/${category.category_id}`}
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
                                    Види понуди
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
