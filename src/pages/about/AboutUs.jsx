import { Container, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { team } from "../../assets/team.json";

export const AboutUs = () => {
    console.log(team);
    return (
        <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            <ImageList sx={{ width: '80%', height: '80%', overflow: 'hidden' }} cols={5}>
                {team.map((member) => (
                    <ImageListItem key={member.id} cols={1}>
                        <img
                            src={`/src/assets/${member.image}.jpg`}
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
