import React from 'react'

export default function LeftCart() {
  const cart = [
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
  ]

  return (
    <div>
      <h3>Continue shopping</h3>
      <h4>Shopping cart</h4>
      <h4>You have 4 items in your cart</h4>
      <div>
        {cart.map((item,index) =>(
          <div className='cart-item'>
            <img src="https://i.pinimg.com/736x/83/09/26/830926c77c6546e0ce5794a7c06c2286.jpg" alt="" style={{width:50}}/>
            <div className='cart-name'>
              <h3>{item.name}</h3>
              <h4>{item.size}GB, {item.color}</h4>
            </div>
            <h3>{item.quantity}</h3>
            <h3>${item.price}</h3>
            <h3>icon delete</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
