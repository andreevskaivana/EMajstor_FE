import { useState, useEffect } from 'react';
import { Container, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { team } from "../../assets/team.json";

export const AboutUs = () => {
    const [images, setImages] = useState({});

    useEffect(() => {
        const importImages = async () => {
            const importedImages = {};
            for (const member of team) {
                const { default: image } = await import(`../../assets/members/${member.image}.jpg`);
                importedImages[member.image] = image;
            }
            setImages(importedImages);
        };



        importImages().then(() => console.log("Images loaded"));
    }, []);

    return (
        <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            <ImageList sx={{ width: '80%', height: '80%', overflow: 'hidden' }} cols={5}>
                {team.map((member) => (
                    <ImageListItem key={member.id} cols={1}>
                        <img
                            src={images[member.image]}
                            alt={member.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={member.name}
                            subtitle={member.role}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};