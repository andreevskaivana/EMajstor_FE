import {useState} from 'react';
import {Container, Box, Typography, TextField, Button, Dialog, DialogContent, DialogContentText} from "@mui/material";
import '../../index.css'
export const Contact = () => {
    const [showDialog, setShowDialog] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowDialog(true);
        e.target.reset();
    }

    return (
        <Container sx={{mt: 6, mb: 2}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mb={4}>
                <Box flexBasis="45%">
                    <Typography variant="h6" mb={2}>Нашата локација</Typography>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.8209445976954!2d21.40697297591175!3d42.00411817122828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541443605aa4ab%3A0x33d56647e5b87264!2sFaculty%20of%20Computer%20Science%20%26%20Engineering!5e0!3m2!1sen!2smk!4v1715957310107!5m2!1sen!2smk"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <Box mt={2} mb={4}>
                        <Typography variant="body2">
                            Адреса: ул. Руѓер Бошковиќ 16 1000, <br/> Руѓер Бошковиќ 16, Скопје 1000
                        </Typography>
                        <Typography variant="body1">Емаил: emajstor@gmail.com</Typography>
                        <Typography variant="body1">Telefon: +389988382</Typography>
                    </Box>
                </Box>
                <Box flexBasis="50%">
                    <Typography variant="h4" gutterBottom>Контактирај не</Typography>
                    <Typography variant="body1" paragraph>
                        Доколку имате некакви прашања или сакате да се информирате, пополнете со вашите информации:
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <TextField fullWidth label="Име" name="name" required/>
                        </Box>
                        <Box mb={2}>
                            <TextField fullWidth label="Емаил" name="email" type="email" required/>
                        </Box>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Порака"
                                name="message"
                                multiline
                                rows={5}
                                required
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#2A2C24',
                                '&:hover': {
                                    backgroundColor: '#575A4B',
                                    color: '#fff',
                                },
                                color: '#fff',
                                borderRadius: '12px',
                            }}
                            onClick={() => setShowDialog(false)}
                        >
                            Контакт
                        </Button>
                    </form>
                </Box>
            </Box>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogContent>
                    <DialogContentText>
                        Ја цениме вашата заинтересираност! Ќе ве исконтактираме наскоро
                    </DialogContentText>

                </DialogContent>
            </Dialog>
        </Container>
    );
}
