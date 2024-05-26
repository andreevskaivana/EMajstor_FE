import { useEffect, useState } from "react";
import { UserService } from "../../services/user-service.js";
import { Card, CardContent, Typography, Grid, Container, Avatar, Box, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";

export const UserProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const navigate = useNavigate();

    const getUserProfile = () => {
        const appUserId = localStorage.getItem("appUserId");
        UserService.getUserById(appUserId)
            .then(res => {
                if (res.data) {
                    setUser(res.data);
                }
            }).catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        getUserProfile();
    }, [navigate]);

    const getInitials = (firstName, lastName) => {
        if (firstName && lastName) {
            return `${firstName.charAt(0)}${lastName.charAt(0)}`;
        }
        return null;
    };

    const initials = getInitials(user.firstName, user.lastName);

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
                        <CardContent>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Avatar sx={{ width: 50, height: 50, mb: 2, bgcolor: '#3f51b5', color: 'white' }}>
                                    {initials ? initials : <AccountCircleIcon sx={{ width: 40, height: 40 }} />}
                                </Avatar>
                                <Typography variant="h5" fontWeight="bold" component="div" gutterBottom>
                                    {user.firstName} {user.lastName}
                                </Typography>
                                <Divider sx={{ width: '100%', my: 2 }} />
                                <Typography variant="body1" color="text.secondary">
                                    Email: {user.email}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Phone Number: {user.phoneNumber}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
