import React from 'react';
import './contactjsx.css';
import Footer from './Footer';
import Headder from "./Navbar";

function contact() {
    return ( 
    <>
        <
        Headder / >
        <div className='contact-us-title'>Contact Us</div>
        <div className='contact-page'>
                    <div className='contactus-image'>
                    <img src='./contactus-page-image.png'></img>
                    <div className='image-des'>
                    “Together, Let's Shape the Future of Food - Contact Us with Your Ideas and Questions”
                    </div>
                    </div>
                    <div className='contactus-form'>
                    <div style={{ display: 'flex', justifyContent: 'center',fontSize:'50%', alignItems: 'center', height: '100px' }}>
                    Contact Form</div>
                    <form className='contact-form'>
                        <input className='input-1' type='text' name= 'Name'placeholder='Enter your name'>
                        </input>
                        <input className='input-1' type='email' name='email' placeholder='Enter your email'>
                        </input>
                        <input style={{height:'250px'}} className='input-1' type='text' name='description'
                        placeholder='Description'>
                        </input>
                        <button className='form-btn' type='submit'>Send</button>
                    </form>
                </div>
    </div>


        <
        Footer / >
        < />
    );
}

export default contact;