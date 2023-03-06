import { Container } from "@mui/material";
import { CardDetails } from "../components";

export const ProductDetailsPage: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{margin: '25px 0'}}>
            <CardDetails />
        </Container>
    );
};