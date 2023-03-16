import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CartMenu, Footer, Header } from './components'
import { CheckOutPage, ProductCardsPage, ProductDetailsPage } from './pages'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export const App: React.FC = () => {
    return (
        <>
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
