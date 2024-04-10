import React from 'react'
import './aboutus_styles.css';
import {Link} from "react-router-dom"
import { ExternalLink } from 'react-external-link';

function Aboutus() {
  return (
   <>
   <div>
 <div className="macbook-air-7">
        <img className="macbook-air-7-child" alt="" src="/frame-251.svg" />
        <div className="access-context-manager-svgrepo-parent">
          <img
            className="access-context-manager-svgrepo-icon"
            alt=""
            src="/accesscontextmanager-svgrepocom.svg"
          />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="nutryfood1">NUTRYFOOD</div>
          <b className="crowned-with-innovations2">CROWNED WITH INNOVATIONS</b>
        </div>
        <div className="component-58-parent">
          <img className="component-38-icon" alt="" src="/component-58.svg" />
          <div className="domestic-international">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
        </div>
      </div>
      <div className="macbook-air-6">
        <div className="frame-parent1">
          <div className="home-group">
            <div className="best-sellers"><Link to="/">Home</Link></div>
            {/* <img className="frame-child3" alt="" src="/vector-18.svg" /> */}
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/aboutus">About Us</Link></div>
            <img className="frame-child4" alt="" src="/vector-19.svg" />
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/products">Products</Link></div>
            <img className="frame-child4" alt="" src="/vector-20.svg" />
          </div>
          <div className="home-group">
            <div className="best-sellers"><Link to="/contactus">Contact Us</Link></div>
            <img className="frame-child4" alt="" src="/vector-21.svg" />
          </div>
        </div>
        <div className="phone-2-1-parent">
         <Link> <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" /></Link>
         <ExternalLink href='https://contact@Nutryfood.com'><img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" /></ExternalLink>
         <ExternalLink href='https://web.whatsapp.com/'><img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" /></ExternalLink>
        </div>
      </div> 
      <div>
        <div className='aboutus-section'>
    <div className='about-us'>About Us</div>
    </div>
    <div className='aboutus-des'>
     <div className='foundation'>
        <div className='imagea-1'>
            <img src='./imageaboutus1.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Standing Foundation</div>
            <div className='foundation-des' >
            Our goal is global expansion, ensuring all Indians worldwide enjoy the taste and health benefits of Indian cuisine. We achieve this through partnerships with Indian restaurants worldwide, maximizing NutryFood Industries' reach.
            </div>
        </div>
     </div>
     <div className='foundation'>
        <div className='imagea-2'>
            <img src='./imageaboutus2.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Branching Principles</div>
            <div className='foundation-des'>
            We uphold unwavering commitment to quality, standards, traditional cooking methods, preserving nutrients, health benefits, and the personal touch that our customers cherish.
            </div>
        </div>
        
     </div>
     <div className='foundation' style={{marginRight:'4rem'}} >
        <div className='imagea-3'>
            <img src='./imageaboutus3.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Fruitful Results</div>
            <div className='foundation-des' >
            We continue our mothers' legacy by offering NutryFood to present and future generations, ensuring the tradition lives on.
            </div>
        </div>
        </div>
     </div>
     </div>
     
     <div className='journey-title' style={
        {
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            display: 'flex',
            justifyContent:'center',
            lineHeight: 'normal',
            marginBottom: '20px',
          }
    }>
        Our Journey
    </div>
    <div className='journey-des' style={
        {
            color: 'rgba(0, 0, 0, 0.70)',
            fontFamily: 'Lato',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            // width:'1152px',
            textAlign:'justify',
            margin: "0 4rem 0 4rem",
          }
    }>
        At the heart of Nutryfood's success is our strong focus on making food better through lots of testing and improving. We've made cooking much quicker and easier, turning long tasks into short ones, so you can spend less time in the kitchen. At Nutryfood, we're all about making cooking effortless, where every dish is made with care and tastes amazing.
        <br></br> <br></br>
We're really proud of what we do. Every bite you take shows how much we care about making food taste great. Nutryfood is all about bringing together new ideas with old ones to make food that's both tasty and good for you.
<br></br> <br></br>
We want everyone to enjoy the flavors of Indian food, no matter where they are. And we promise that when you choose Nutryfood, you're getting food that's good for you and tastes great. Plus, our solutions won't break the bank, so everyone can enjoy delicious meals. Come join us on this journey of tasty food and new ideas!
    </div>
    <div className='mission-vision'>
      <div className='mission'>
        <div className='mission-title'>
            <div className='mission-image'>
            <img src='./mission_icon.svg' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>MISSION</div>
        </div>
        <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
      </div>
      </div>
      <div className='vision'>
        <div className='mission-title'>
            <div className='mission-image'>
            <img src='./mission_icon.svg' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>VISION</div>
        </div>
        <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
      </div>
      </div>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'center'}} >
      <div className='core-title'>Core Values</div></div>
       <div className='core-1'>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 58.png'></img>
            </div>
            <div className='core-1-title'>Innovation</div>
        </div>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 59.png'></img>
            </div>
            <div className='core-1-title'>Integrity</div>
        </div>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 60.png'></img>
            </div>
            <div className='core-1-title'>Excellence</div>
        </div>
       </div>
       <div className='core-2'>
       <div className='core-2-a' >
            <div className='image-1-a'>
                <img src='./Component 62.png'></img>
            </div>
            <div className='core-1-title'>Inclusivity</div>
        </div>
        <div className='core-2-a' >
            <div className='image-1-a'>
                <img src='./Component 61.png'></img>
            </div>
            <div className='core-1-title'>Sustainability</div>
        </div>
       </div>
       <div className='founders-section'>
        <div className='heading'>Founders</div>
        <div className='founder-1'>
          <div className='image-1-founder'>
            <img src='/IMG_3990 1.png'></img>
          </div>
          <div className='founder-1-des'>
            <div className='founder-1-title'>
              <div className='founder-1-name'>Nanda Kishore Reddy</div>
              <div className='founder-1-role'>Co-Founder</div>
            </div>
            <div className='founder-1-about'>
            Nanda Kishore Reddy, a visionary entrepreneur deeply rooted in Indian agriculture, founded his first company, Regis EXIM, at the age of 21. Born into a farming family, he understood the hardships of the agricultural community. At 24, he co-founded Nutryfood with a mission to revolutionize the culinary landscape. His relentless drive led to the transformation of complex cooking processes into effortless tasks. His vision remains clear:harmonize cutting-edge innovation with traditional Indian flavors, ensuring convenience, quality, and culinary excellence for all. Nanda Kishore Reddy's story epitomizes resilience and innovation, reflecting in Nutryfood's mission to redefine taste through research excellence and unwavering commitment to supreme quality.
            </div>
          </div>
        </div>
        <div className='founder-1'>
          <div className='founder-1-des'>
            <div className='founder-1-title'>
              <div className='founder-1-name'>Dr. Yalaka Nandini</div>
              <div className='founder-1-role'>Co-Founder</div>
            </div>
            <div className='founder-1-about'>
            "With a decade of experience in Agricultural Engineering Research, Dr. Yalaka Nandini has pioneered various farming technologies for both small and large-scale farmers. Her deep-rooted understanding of food's importance led her to believe that it's pivotal for human health and prosperity. Motivated by this belief and a desire to offer high-quality, nutritious food with traditional values to those purchasing and consuming food products, she founded Nutry Food. Dr. Nandini ensures quality standards and oversees overseas the company."
            </div>
          </div>
          <div className='image-1-founder'>
            <img src='/_DSC0158 1.png'></img>
          </div>
        </div>
    </div>
    <div className='team-section'>
    <div className='team-title'>Our Team</div>
  </div>
  <div className='team-frame'>
    <div className='team-frame-1'>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
    </div>
    <div className='team-frame-1'>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
      <div className='team-frame-1-a'>
        <div className='imaget-1'>
        <img src='./Component 64.png'></img>
        </div>
        <div className='des'>
          <div className='des-des'>Business development</div>
        </div>
      </div>
   </div>
</div>
<div className='home' style={{height:'1800px'}}>
        <div className="macbook-air-5">
        <div className="nutryfood-parent">
          <div className="nutryfood">NUTRYFOOD</div>
          <div className="crowned-with-innovations1">
            CROWNED WITH INNOVATIONS
          </div>
        </div>
        <div className="home-parent">
          <div className="best-sellers"><Link to='/'>Home</Link></div>
          <div className="best-sellers"><Link to='/aboutus'>About Us</Link></div>
          <div className="best-sellers"><Link to='/products'>Products</Link></div>
          <div className="best-sellers"><Link to='/contactus'>Contact Us</Link></div>
        </div>
        <div className="component-38-parent">
     <ExternalLink href='https://www.linkedin.com/company/nutryfood'>
      <img className="component-38-icon" alt="" src="/component-38.svg" /></ExternalLink>   
      <ExternalLink href='https://twitter.com/Nutryfood_'>
        <img className="component-38-icon" alt="" src="/component-39.svg" /></ExternalLink>    
        <ExternalLink href="https://www.instagram.com/nutryfood_/"><img className="component-38-icon" alt="" src="/component-40.svg" />
        </ExternalLink>  
         <ExternalLink href="https://www.facebook.com/NutryFoodIndustries/"> <img className="component-38-icon" alt="" src="/component-41.svg" />
         </ExternalLink>
         <ExternalLink href=''>
          <img className="component-38-icon" alt="" src="/component-42.svg" />
          </ExternalLink>
        </div>
        <div className="nutryfood-all-rights">
          © 2024, NutryFood. All rights reserved.
        </div>
      </div>
      </div>
 </div>
    </>
  )
}

export default Aboutus