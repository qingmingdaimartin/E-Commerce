import React from "react";
import './NewsLetter.css'


const NewsLetter = () =>{
    return(
        <div className = 'newsletter'>  
            <h1>Get Offers On Your Email</h1>
            <p>subscribe to our newletter and updated</p>
            <div>
                <input type="email" placeholder="Your Email id"/>
                <button>Subscribe</button>
            </div>
                            
        </div>
    )
}

export default NewsLetter