import React from 'react'

export default function Header() {
  return (
    <>
        <div className="header-area">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="user-menu">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> My Account
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-heart" /> Wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> My Cart
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> Checkout
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="header-right">
            <ul className="list-unstyled list-inline">
              <li className="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  className="dropdown-toggle"
                  href="#"
                >
                  <span className="key">currency :</span>
                  <span className="value">USD </span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">INR</a>
                  </li>
                  <li>
                    <a href="#">GBP</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  className="dropdown-toggle"
                  href="#"
                >
                  <span className="key">language :</span>
                  <span className="value">English </span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mainmenu-area">
  <div className="container">
    <div className="row">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">
            <a href="#">Shop page</a>
          </li>
          <li>
            <a href="#">Single product</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Checkout</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* End mainmenu area */}
<div className="product-big-title-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-bit-title text-center">
          <h2>Shop</h2>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
