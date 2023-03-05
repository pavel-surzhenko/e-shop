import { Container } from "@mui/material";
import { ProductCardList } from "../components";

export const ProductCardsPage: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{margin: '25px 0'}}>
            <ProductCardList />
        </Container>
    );
};