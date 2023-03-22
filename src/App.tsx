import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'material-react-toastify'

import { CartMenu, Footer, Header } from './components'
import { CheckOutPage, ProductCardsPage, ProductDetailsPage } from './pages'
import { useErrorMessage } from './hooks'

import { productListActions } from './redux/actions'

export const ScrollToTop = (): null => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export const App: React.FC = () => {
    const dispatch = useDispatch()
    useErrorMessage()

    useEffect(() => {
        dispatch(productListActions.fetchCardsAsync())
    }, [dispatch])

    return (
        <>
            <ToastContainer
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
            />
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<ProductCardsPage />} />
                <Route path='item/:itemId' element={<ProductDetailsPage />} />
                <Route path='/checkout' element={<CheckOutPage />} />
            </Routes>
            <CartMenu />
            <Footer />
        </>
    )
}
