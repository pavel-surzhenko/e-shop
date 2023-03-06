import { Container } from "@mui/material";
import { ProductCardList } from "../components";

export const ProductCardsPage: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{ margin: '25px auto', flexGrow: '1'}}>
            <ProductCardList />
        </Container>
    );
};