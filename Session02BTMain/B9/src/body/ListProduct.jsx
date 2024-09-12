import React from 'react'

export default function ListProduct({list}) {
    // console.log(props);
    
  return (
    <>
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
            <div className="row">
            
                {
                    
                    list.map((item,index) => (
                        <div className="col-md-3 col-sm-6">
                        <div className="single-shop-product">
                            <div className="product-upper">
                            <img src="./src/assets/img/product-2.jpg" alt="" />
                            </div>
                            <h2>
                            <a href="">{item.name} :P</a>
                            </h2>
                            <div className="product-carousel-price">
                            <ins>${item.price}</ins> <del>${item.price}</del>
                            </div>
                            <div className="product-option-shop">
                            <a
                                className="add_to_cart_button"
                                data-quantity={1}
                                data-product_sku=""
                                data-product_id={70}
                                rel="nofollow"
                                href=""
                            >
                                Add to cart
                            </a>
                            </div>
                        </div>
                        </div>
                    ))
                }
                {/* </div> */}
            </div>
            </div>
        </div>
    </>
  )
}
