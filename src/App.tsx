import { Route, Routes } from 'react-router-dom'
import { CartMenu, Footer, Header } from './components'
import { ProductCardsPage, ProductDetailsPage } from './pages'

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<ProductCardsPage />} />
                <Route path='item/:itemId' element={<ProductDetailsPage />} />
            </Routes>
            <CartMenu />
            <Footer />
        </>
    )
}
