import { Container } from "@mui/material";
import { CheckOutSideBar, CheckOutStepper } from "../components";

export const CheckOutPage: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{ margin: '25px auto', flexGrow: '1', display:'flex', justifyContent:'space-between' }}>
            <CheckOutStepper />
            <CheckOutSideBar />
        </Container>
    );
};