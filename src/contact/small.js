import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Description18x24 from './18x24.js';
import CustomizedDialogs from './dialog';

function Sizing() {
  return (
    <div>
    <CookiesProvider>
    <CustomizedDialogs>
      <Description18x24 />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Sizing;


