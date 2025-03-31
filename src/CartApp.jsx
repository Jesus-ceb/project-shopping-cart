import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPages } from './pages/ProductsPages'
import { ShopiPages } from './pages/ShopiPages'
import { ProductProvider } from './context/ProductProvider'
import { CartContext } from './context/CartContext'
import { CartProvider } from './context/CartProvider'

export const CartApp = () => {
    return (

        <ProductProvider>
            <CartProvider>
                <NavBarComponent/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={ <ProductsPages /> }></Route>
                        <Route path='/carrito' element={ <ShopiPages /> }></Route>
                        <Route path='/*' element={<Navigate to = '/' />}></Route>
                    </Routes>

                </div>
            </CartProvider>
        </ProductProvider>
    
    )
}
