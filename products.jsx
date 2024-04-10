import React from 'react';
import './product_style.css';
import Footer from './Footer';
import Headder from"./Navbar";

function Products() {
    return (
        <>
       <Headder/>
       <p>products page </p>
       <div>
  <div className='spotlight-header'>
    <div className='spotlight-title'>Spotlight</div>
  </div>
  <div className='spotlight-images'>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 1' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 2' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 3' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 4' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 5' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 6' />
    </div>
    <div className='spotlight-image-1'>
      <img src='Ellipse 24 (3).png' alt='Spotlight Image 7' />
    </div>
  </div>
  <div className='product-filter'>
    <button className='product-button-1'>
      <div className='btn-des'>
        <div className='product-btn-icon'>
          <img src='./product-btn-icon.png' alt='Product Button Icon' />
        </div>
        <div className='product-btn-des'>Breakfast</div>
      </div>
    </button>
    <button className='product-button-1'>
      <div className='btn-des'>
        <div className='product-btn-icon'>
          <img src='./product-btn-icon.png' alt='Product Button Icon' />
        </div>
        <div className='product-btn-des'>Biryani Masala</div>
      </div>
    </button>
    <button className='product-button-1'>
      <div className='btn-des'>
        <div className='product-btn-icon'>
          <img src='./product-btn-icon.png' alt='Product Button Icon' />
        </div>
        <div className='product-btn-des'>Tea Concentrations</div>
      </div>
    </button>
  </div>
  <div className='product-more-filter'>
    <div className='filters-products'>
      <button className='filters-btn'>Mix Powders</button>
      <button className='filters-btn'>Cook Powders</button>
      <button className='filters-btn'>Chutney</button>
      <button className='filters-btn'>Sambhar</button>
    </div>
    <div className='products-sort'>
      <div className='total-products'>98 Products</div>
      <div className='products-dropdown'>
        <button onClick={() => {}} className='drop-btn'>Sort By</button>
        <div className='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>
    </div>
    </div>
    </div>
 
  
        <Footer/>
        </>
    );
}

export default Products;
