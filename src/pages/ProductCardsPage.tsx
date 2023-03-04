import { Container } from "@mui/material";
import { ProductCardList } from "../components";

export const ProductCardsPage: React.FC = () => {
    return (
        <Container maxWidth='xl'>
            <ProductCardList />
        </Container>
    );
};