import {Button, Container, FormControl, Grid, Input, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import  {useState} from "react";

export const AddCompany=()=>{
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-project-modal-title"
                aria-describedby="add-project-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3
                    }}
                >
                    <Typography variant="body1" mt={2} mb={2} align="center" sx={{fontFamily: "sans-serif"}}>
                        Креирај оглас
                    </Typography>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси име на услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси опис на услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси цена за услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Одбери категорија за услугата"}/>
                    </FormControl>
                    <FormControl fullWidth sx={{mt: 1}}>
                        <Input placeholder={"Внеси име на компанијата"}/>
                    </FormControl>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                        <Button sx={{
                            color: "#575A4B",
                            borderRadius: '20px',
                            border: `1px solid #2A2C24`,
                            '&:hover': {
                                backgroundColor: '#2A2C24',
                                color: '#fff',
                            }
                        }} onClick={handleClose}>КРЕИРАЈ</Button>
                    </Box>
                </Box>
            </Modal>
            <Container sx={{mt: 4, mb: 4}}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12} sm={12}>
                        <Typography align="center" sx={{mb: 1}}>
                            Нудиш некаква услуга која ја нема на листата?
                        </Typography>
                        <Box sx={{textAlign: 'center'}}>
                            <Button
                                href="#"
                                sx={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    color: "#575A4B",
                                    borderRadius: '20px',
                                    border: `1px solid #2A2C24`,
                                    '&:hover': {
                                        backgroundColor: '#2A2C24',
                                        color: '#fff',
                                    }

                                }}
                                onClick={handleOpen}
                            >
                                Постави ја тука
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}