import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckoutPage } from '../components/CheckoutPage'
import { Products } from '../components/Products'
import { Navbar } from '../components/Navbar';
import { Checkout } from '../components/checkoutForm/Checkout';
export const EcommerceRouter = () => {
  return (
    <>
       <Navbar/>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/checkout-page' element={<CheckoutPage/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/*' element={ <Navigate to="/"/>} />
        </Routes>
    </>
 
  )
}