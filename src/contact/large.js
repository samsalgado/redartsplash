import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Description24x36 from './24x36.js';
import CustomizedDialogs from './dialog';

function Sizing2() {
  return (
    <div>
    <CookiesProvider>
    <CustomizedDialogs>
      <Description24x36 />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Sizing2;
