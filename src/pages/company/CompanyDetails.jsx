import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import '../../index.css';
import React from "react";

export const CompanyDetails = () => {
    return (
        <>
            <Container sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h5" textAlign="center">
                    Контакт информации
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4} container direction="column"
                          sx={{
                              backgroundColor: 'red'
                          }}>
                        <Typography variant="body1">
                            Телефонски број
                        </Typography>
                        <Typography variant="body1">
                            Што нудиме
                            - работа{'\n'}
                            - работа{'\n'}
                            - работа{'\n'}
                            - работа
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
