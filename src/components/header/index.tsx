import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ShoppingBasket } from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Badge,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { cartActions } from '../../redux/actions'
import { getCart, getItemsProduct } from '../../redux/selectors'

import { SearchIconWrapper, StyledInputBase, Search } from './style'

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(getCart)

    const allItems = useSelector(getItemsProduct)

    const [searchItemName, setSearchItemName] = useState('')

    const searchItems = allItems.filter(
        (item) =>
            item.title.toLowerCase().includes(searchItemName.toLowerCase()) &&
            searchItemName
    )

    const searchItemsListJSX = searchItems.map((item) => (
        <React.Fragment key={item.id}>
            <ListItem
                onMouseDown={() => navigate(`/item/${item.id}`)}
                sx={{ gap: '10px', cursor: 'pointer' }}
            >
                <ListItemAvatar>
                    <Avatar
                        sx={{ width: '60px', height: '60px' }}
                        alt={item.title}
                        src={item.image}
                    />
                </ListItemAvatar>
                <ListItemText color='text.main' primary={item.title} />
            </ListItem>
            <Divider />
        </React.Fragment>
    ))

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
                        onFocus={(e) => setSearchItemName(e.target.value)}
                        onBlur={() => setSearchItemName('')}
                        onChange={(e) => setSearchItemName(e.target.value)}
                        type='search'
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <List
                        disablePadding
                        sx={{
                            minWidth: '275px',
                            maxWidth: '500px',
                            maxHeight: '150px',
                            overflowY: 'scroll',
                            position: 'absolute',
                            left: '0',
                            top: '40px',
                            backgroundColor: 'primary.main',
                            borderRadius: '3px',
                            zIndex: '100',
                            display: searchItemName ? 'block' : 'none',
                        }}
                    >
                        {searchItems.length === 0 && searchItemName && (
                            <ListItem>
                                <ListItemText
                                    color='text.main'
                                    primary='Nothing was found according to your request. Refine your request'
                                />
                            </ListItem>
                        )}

                        {searchItems.length > 0 && searchItemsListJSX}
                    </List>
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
