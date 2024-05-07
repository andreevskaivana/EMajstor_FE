import {Container, Grid} from "@mui/material";
import "../../index.css";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {CompanyService} from "../../services/company-service.js";
import {useEffect, useState} from "react";
import {JobsService} from "../../services/jobs-service.js";

export const CompanyDetails = () => {
    const {id} = useParams();
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);

    const fetchCompanies = () => {
        CompanyService.fetchJobsByCompany(id).then((res) => {
            setCompanies(res.data);
        });
    };
    const fetchJobs = () => {
        JobsService.fetchJobsByCategory(id).then((res) => {
            setJobs(res.data);
        });
    };

    console.log(jobs);
    useEffect(() => {
        fetchCompanies();
        fetchJobs();
    }, [id]);

    return (
        <>
            <Container sx={{mt: 4, mb: 2, backgroundColor: "red"}}>
                <Grid container>
                    {/* Mapping over companies */}
                    {Array.isArray(companies) &&
                        companies.length > 0 &&
                        companies.map((company) => (
                            <Grid
                                item
                                direction="column"
                                sx={{
                                    backgroundColor: "yellow",
                                }}
                            >
                                {company.name}
                            </Grid>
                        ))}
                    {/* End of mapping for companies */}
                </Grid>
                {/* Mapping over jobs */}
                <Typography>
                    Што нудиме
                </Typography>
                {Array.isArray(jobs) &&
                    jobs.length > 0 &&
                    jobs.map((job) => (
                        <Typography>
                            {job.title}
                            {job.description}
                        </Typography>

                    ))}
                {/* End of mapping for jobs */}
            </Container>
        </>
    );
};
