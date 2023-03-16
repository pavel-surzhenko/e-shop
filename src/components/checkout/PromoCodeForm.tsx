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
                    sx={{ '& .MuiInputBase-root':{borderRadius:'4px 0 0 4px'}}}
                />
                <Button variant='contained' sx={{ borderRadius:'0 4px 4px 0'}} disabled={!promoCode.length}>Apply</Button>
            </Box>
    );
};