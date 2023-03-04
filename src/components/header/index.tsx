import { styled, alpha } from '@mui/material/styles'
import { ShoppingBasket } from '@mui/icons-material'
import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

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

export const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{ flexGrow: 1, minWidth: '70px', marginRight: '10px' }}
                >
                    E-Shop
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        type='search'
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <IconButton color='inherit'>
                    <ShoppingBasket />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
