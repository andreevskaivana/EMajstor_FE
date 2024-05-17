import { useState } from "react";
import { Container, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import {JobsService} from "../../services/jobs-service.js";

export const CompanyRating = ({ jobId }) => {
    const [value, setValue] = useState(0);
    console.log(jobId)
    return (
        <Container>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Ја имаш користено оваа услуга?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Оценете го вашето искуство
                    </Typography>
                </Grid>
                <Grid item>
                    <Rating
                        name={`rating-${jobId}`}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            JobsService.gradeJob(jobId,newValue);
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
