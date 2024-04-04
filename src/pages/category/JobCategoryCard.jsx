import React, {useEffect, useState} from "react";
import categoriesData from '../../assets/categories.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Grid,Container} from '@mui/material';
import {Link} from "react-router-dom";

export const JobCategoryCard = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData.categories)
        console.log(categoriesData)
    }, [])

    return (
        <Container sx={{ mt: 2 , mb:2 }}>
            <Grid container spacing={2}>
                {categories.map(category => (
                    <Grid item key={category.id} xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={category.image}
                                    alt={category.name}
                                />
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {category.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {category.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Button
                                    component={Link}
                                    to={`/companies`}
                                    variant="outlined"
                                    sx={{
                                        color: "#575A4B",
                                        borderRadius: '20px',
                                        border: `1px solid #2A2C24`,
                                    }}
                                >
                                    Види детали
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
