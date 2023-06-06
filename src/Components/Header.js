import React from 'react';
import logo from '../Images/Musigma.png'
import AB from '../Images/AB.jpg'

const Header = () => {
  return (
    <div>
    {/* <header id='headermain'>
      <div className="left-side">
      <img className='imgs' src={AB} alt="Logo" /> <span className='header1'>Pharmacy Accessibility Insight</span>
        
        <p className='header2'>My Community, My Pharmacy</p>
        
      </div>
      <div className="right-side">
        <img className='img' src={logo} alt="Logo" />
      </div>
     
    </header> */}

<nav class="navbar navbar-light">
 
  <div className="left-side">
      <img className='imgs' src={AB} alt="Logo" />
       <span className='header1'>Pharmacy Accessibility Insight</span>
        
        <p className='header2'>My Community, My Pharmacy</p>
        
      </div>
      <div className="right-side">
        <img className='img' src={logo} alt="Logo" />
      </div>

</nav>
    </div>
  );
};

export default Header;
