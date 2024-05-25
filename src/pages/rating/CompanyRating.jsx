import { useState, useEffect } from "react";
import { Container, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import { JobsService } from "../../services/jobs-service.js";

export const CompanyRating = ({ jobId, onRatingChange, initialRating }) => {
    const [value, setValue] = useState(initialRating);

    useEffect(() => {
        setValue(initialRating);
    }, [initialRating]);

    const handleRatingChange = async (event, newValue) => {
        setValue(newValue);
        try {
            await JobsService.gradeJob(jobId, newValue);
            onRatingChange(jobId, newValue);  // Update parent component
        } catch (error) {
            console.error("Failed to update rating", error);
        }
    };

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
                        name={`half-rating-${jobId}`}
                        precision={0.5}
                        value={value}
                        onChange={handleRatingChange}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
