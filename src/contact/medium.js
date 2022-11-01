import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Description20x24 from './20x24.js';
import CustomizedDialogs from './dialog';

function Sizing1() {
  return (
    <div>
    <CookiesProvider>
    <CustomizedDialogs>
      <Description20x24 />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Sizing1;


