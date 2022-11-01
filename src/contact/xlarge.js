import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Description30x40 from './30x40.js';
import CustomizedDialogs from './dialog';

function Sizing3() {
  return (
    <div>
    <CookiesProvider>
    <CustomizedDialogs>
      <Description30x40 />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Sizing3;


