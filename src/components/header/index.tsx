import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { styled, alpha } from '@mui/material/styles'
import { ShoppingBasket } from '@mui/icons-material'
import {
    AppBar,
    Badge,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { cartActions } from '../../redux/actions'
import { getCart } from '../../redux/selectors'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(getCart)    

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    onClick={() => navigate('/')}
                    variant='h6'
                    component='span'
                    sx={{
                        minWidth: '70px',
                        marginRight: 'auto',
                        cursor: 'pointer',
                    }}
                >
                    E-Shop
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        type='search'
                        placeholder='Search???'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Badge
                    badgeContent={cart.length}
                    color='error'
                    invisible={cart.length === 0}
                    sx={{
                            right: 5,
                            top: 5,
                            padding: '0 3px',
                            height: '14px',
                            minWidth: '13px',
                    }}
                >
                    <IconButton
                        color='inherit'
                        sx={{ marginLeft: '20px' }}
                        onClick={() => dispatch(cartActions.setIsCartOpen())}
                    >
                        <ShoppingBasket />
                    </IconButton>
                </Badge>
            </Toolbar>
        </AppBar>
    )
}
