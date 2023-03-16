import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export const PromoCodeForm: React.FC = () => {
    const [promoCode, setPromoCode] = useState('')  
    
    return (
        <Box display='flex' m='15px 0'>
                <TextField
                    value={promoCode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPromoCode(event.target.value)}
                    }
                    fullWidth
                    id='outlined-basic'
                    label='Promo code'
                    variant='outlined'
                />
                <Button variant='contained' disabled={!promoCode.length}>Apply</Button>
            </Box>
    );
};