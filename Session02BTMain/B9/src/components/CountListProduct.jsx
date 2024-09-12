import React from 'react'
import ListProduct from '../body/ListProduct'

export default function CountListProduct() {
    const listProducts = [
        {
            name: "Iphone 11",
            size: 256,
            color: "Navy Blue",
            quantity: 2,
            price:900
          },
          {
            name: "SamSung Galaxy",
            size: 256,
            color: "Navy Blue",
            quantity: 2,
            price:900
          },
          {
            name: "Canon EOS M50",
            size: 120,
            color: "Only Black",
            quantity: 1,
            price:1100
          },
          {
            name: "MacBook Pro",
            size: 1000,
            color: "Grand Blue",
            quantity: 1,
            price:1900
          },
          {
            name: "MacBook Pro",
            size: 1000,
            color: "Grand Blue",
            quantity: 1,
            price:1900
          },
    ]
  return (
    <>
        <ListProduct list={listProducts}/>
    </>
  )
}
