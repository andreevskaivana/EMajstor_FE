import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

export const CompanyRating = () => {
    const [hover, setHover] = useState(null);

    const handleHover = (rating) => {
        setHover(rating);
    };

    return (
        <Container sx={{ mt: "15vh", mb: "15vh" }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Typography align="center">
                        Успешно го закажавте вашиот термин
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Проверете го вашиот mail за потврда
                    </Typography>
                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <Button
                            component={Link}
                            to={`/home`}
                            sx={{
                                color: "#575A4B",
                                borderRadius: '20px',
                                border: `1px solid #2A2C24`,
                                '&:hover': {
                                    backgroundColor: '#2A2C24',
                                    color: '#fff',
                                }
                            }}>
                            Закажете друга услуга
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Оценете го вашето искуство
                    </Typography>
                    <Grid container alignItems="center" justifyContent="center">
                        {[...Array(5)].map((_, index) => {
                            const rating = index + 1;
                            return (
                                <Grid item key={index}>
                                    <FaStar
                                        size={50}
                                        style={{
                                            color: (hover || rating) <= index ? "gray" : "yellow",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={() => handleHover(rating)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
