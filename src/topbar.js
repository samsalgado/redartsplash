import React from 'react'
import Logo from './Pictures/logo.jpeg';
import Me from './celeste.webp';
function Topbar ()  {

  return (
    <div className='Top-header'>
      
        

        <h1 className='intro'>Red-Art Splash</h1>
       <div><img src={Logo} className="logo" alt="logo" /> </div>
        
        <div><img src={Me} className='me' alt='me' /></div>
        <div className='cs'><p>Celeste Salgado</p></div>

       

       
    </div>

  )
}
export default Topbar;
