import { Button, FormControl, Input, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { JobsService } from "../../services/jobs-service.js";

export const AddCompany = ({ categoryId, onJobAdded }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const addJob = () => {
        const jobProviderId = localStorage.getItem("jobProviderId");

        JobsService.addJob(title, description, price, jobProviderId, categoryId)
            .then((response) => {
                const newJob = response.data;
                onJobAdded(newJob);
                handleClose();
            })
            .catch((error) => {
                console.error("Error adding job: ", error);
            });
    };

    return (
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
                    <Typography variant="h6" mt={2} mb={2} align="center">
                        Креирај оглас
                    </Typography>
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <Input
                            placeholder="Внеси име на услугата"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <Input
                            placeholder="Внеси опис на услугата"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <Input
                            placeholder="Внеси цена за услугата"
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button
                            onClick={addJob}
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
                            КРЕИРАЈ
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }} variant="body2" color="textSecondary">
                    Нудиш некаква услуга која ја нема на листата?
                </Typography>
                <Button
                    onClick={handleOpen}
                    sx={{
                        textAlign: 'center',
                        color: "#575A4B",
                        border: `1px solid #2A2C24`,
                        '&:hover': {
                            backgroundColor: '#2A2C24',
                            color: '#fff',
                        }
                    }}
                >
                    Постави ја тука
                </Button>
            </Box>
        </>
    );
};
