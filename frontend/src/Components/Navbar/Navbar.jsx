import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setmenu] = useState("shop");
        return(
        <div className="navbar">
            <div className="nav-logo">
                <img src = {logo} alt = "" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop" ? "active" : ""}</li> 
                <li onClick={()=>{setmenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"}</li> 
                <li onClick={()=>{setmenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li> 
                <li onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kid</Link>{menu==="kids"?<h/>:<></>}</li> 
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button> Login </button></Link>
                <Link to ='/cart'><img src ={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar