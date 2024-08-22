"use client"

import Cart from '@/components/Cart'
import { CartProvider } from '@/components/CartContext'
import React from 'react'

const CartPage = () => {
  return (
    <div>
      <CartProvider>
        <Cart/>
      </CartProvider>
      
    </div>
  )
}

export default CartPage