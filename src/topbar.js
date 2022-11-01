import React from 'react'
import IntroPic from './intropic.webp';
import Me from './celeste.webp';
function Topbar ()  {

  return (
    <div className='Top-header'>
      
        

        <h1 className='intro'>Tinsley Salgado Art</h1>
       <div><img src={IntroPic} className="logo" alt="logo" /> </div>
        
        <div><img src={Me} className='me' alt='me' /></div>
        <div className='cs'><p>Celeste Salgado</p></div>

       

       
    </div>

  )
}
export default Topbar;
