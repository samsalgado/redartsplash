import React from 'react'
import NA5 from './Pictures/NA5.jpg'
import Prayer from './Pictures/quickprayer.webp'
import Sylinda from './Pictures/Sylinda.webp'
import Laura from './Pictures/Laura.webp'
import Ella from './Pictures/Ella.webp'
import cousins from './Pictures/matchingcousins.webp'
import sttropez from './Pictures/tropez.webp'
import hershape from './Pictures/hershape.webp'
import spiritwalk from './Pictures/spiritwalk2.webp'
import NA8 from './Pictures/NA8.jpg'
import NA9 from './Pictures/NA9.jpg'
import fineat60 from './Pictures/60.webp'
import stage4breastcancer from './Pictures/stage4breastcancer.webp'
import confidentwoman from './Pictures/confidentwoman.webp'
import waiting from './Pictures/waitingroom.webp'
import joy from './Pictures/joy.webp'
import see from './Pictures/see.webp'
import helping from './Pictures/helping.webp'
import finish from './Pictures/finishline.webp'
import we from './Pictures/we.webp'
import deep from './Pictures/deepend.webp'
import woman from './Pictures/woman.webp'
import entangled from './Pictures/entangled.webp'
import promotion from './Pictures/promotion.webp'
import rhythm from './Pictures/rhythm.webp'
import attached from './Pictures/ATTACHED.webp'
import NA1 from './Pictures/NA1.jpg'

import Sizing from './contact/small.js'
import Sizing1 from './contact/medium.js'
import Sizing2 from './contact/large.js'
import Sizing3 from './contact/xlarge.js'
import NA2 from './Pictures/NA2.jpg'
import NA3 from './Pictures/NA3.jpg'
import NA4 from './Pictures/NA4.jpg'
import NA6 from './Pictures/NA6.jpg'
import NA7 from './Pictures/NA7.jpg'
import NA10 from './Pictures/NA10.jpg'
import NA11 from './Pictures/NA11.jpg'
import NA12 from './Pictures/NA12.jpg'
import NA13 from './Pictures/NA13.jpg'
import NA14 from './Pictures/NA14.jpg'
import NA15 from './Pictures/NA15.jpg'
import NA16 from './Pictures/NA16.jpg'
import {Grid, Row, Col} from 'react-flexbox-grid'
const Gallery = () => {
  return (
    <div>
    <h1 className='gallery'>Gallery</h1>
    <Grid>
        <Row>
            <Col>
                <img className='pic1' src={Prayer} alt="" />
                <h2>Lost in Meditation</h2>
                <h3>$155</h3>
                <Sizing />
            </Col>
            <Col>
                <img className='pic1' src={Sylinda} alt="" />
                <h2>Deep Thoughts</h2>
                <h3>$130</h3>
                <Sizing />
            </Col>
            <Col>
                <img className='pic1' src={Laura} alt="" />
                <h2>Laura</h2>
                <h3>$50</h3>
                <Sizing />
            </Col>
            <Col>
              <img className='pic1' src={Ella} alt="" />
              <h2>Ella</h2>
              <h3>$200</h3>
              <Sizing />

            </Col>
            <Col>
              <img className='pic1' src={cousins} alt="" />
              <h2>Matching Cousins</h2>
              <h3>$125</h3>
              <Sizing />

            </Col>
            <Col>
              <img className='pic1' src={sttropez} alt='' />
              <h2>Saint Tropez</h2>
              <h3>$125</h3>
              <Sizing />
              <p className='shipping'>FREE Shipping</p>

            </Col>
            <Col>
              <img className='pic1' src={hershape} alt='' />
              <h2>Her Shape</h2>
              <h3>$125</h3>
              <Sizing />

            </Col>
            <Col>
              <img className = 'pic1' src={spiritwalk} alt='' />
              <h2>Spirit Walk Two</h2>
              <h3>$50</h3>
                <Sizing />
            </Col>
            <Col>
              <img className = 'pic1' src={stage4breastcancer} alt='' />
              <h2>Stage Four Breast Cancer Collection</h2>
              <h3>$50</h3>
              <Sizing />
            </Col>
            <Col>
              <img className = 'pic1' src={fineat60} alt='' />
              <h2>Sculpted</h2>
              <Sizing1 />
              <h3>$100</h3>

            </Col>
            <Col>
              <img className = 'pic1' src={confidentwoman} alt='' />
              <h2>The Confident Woman</h2>
              <h3>$400</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={waiting} alt='' />
              <h2>The Waiting Room</h2>
              <h3>$300</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={joy} alt='' />
              <h2>JOY EXPRESSED</h2>
              <h3>$350</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={see} alt='' />
              <h2>Collectively We See</h2>
              <h3>$200</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={helping} alt='' />
              <h2>Overcome With Grief</h2>
              <h3>$400</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={finish} alt='' />
              <h2>Victory Lap</h2>
              <h3>$200</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={we} alt='' />
              <h2>We The People</h2>
              <h3>$250</h3>
              <Sizing3 />
            </Col>
            <Col>
              <img className = 'pic1' src={deep} alt='' />
              <h2>The Deep End</h2>
              <h3>$450</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={woman} alt='' />
              <h2>Every Woman</h2>
              <h3>$450</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={entangled} alt='' />
              <h2>Entangled</h2>
              <h3>$350</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={promotion} alt='' />
              <h2>Promotion</h2>
              <h3>$400</h3>
              <Sizing2 />
              <p className='shipping'>FREE Shipping</p>
            </Col>
            <Col>
              <img className = 'pic1' src={rhythm} alt='' />
              <h2>Rhythm On My Mind</h2>
              <h3>$400</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className = 'pic1' src={attached} alt='' />
              <h2>Attached</h2>
              <h3>$350</h3>
              <Sizing2 />
            </Col>
            <Col>
              <img className='pic1' src={NA1} alt="" />
              <h2>The Pursuit Of Justice</h2>
              <h3>$200</h3>
              <Sizing2 />
              
            </Col>
            <Col>
              <img className='pic1' src={NA2} alt="" />
              <h2>Ruby</h2>
              <h3>$250</h3>
              <Sizing />
              <p className='shipping'>FREE Shipping</p>
            </Col>
            <Col>
            <img className='pic1' src={NA3} alt="" />
              <h2>On My Mind</h2>
              <h3>$350</h3>
              <Sizing2 />
            </Col>
           <Col>
            <img className='pic1' src={NA5} alt="" />
              <h2>On Stage</h2>
              <h3>$100</h3>
              <Sizing />
              </Col>
              <Col>
              <img className='pic1' src={NA4} alt="" />
              <h2>We March</h2>
              <h3>$350</h3>
              <Sizing3 />

              </Col>
              <Col>
              <img className='pic1' src={NA6} alt="" />
              <h2>The Family United</h2>
              <h3>$50</h3>
              <Sizing3 />
              </Col>
              <Col>
              <img className='pic1' src={NA7} alt="" />
              <h2>My Pain In The Rain</h2>
              <h3>$300</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA8} alt="" />
              <h2> Death By A Thousand Cuts</h2>
              <h3>$300</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA9} alt="" />
              <h2>Advice To My Daughter</h2>
              <h3>$200</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA10} alt="" />
              <h2>The Hope Of A Generation</h2>
              <h3>$150</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA11} alt="" />
              <h2>Street Life</h2>
              <h3>$150</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA12} alt="" />
              <h2>We The People Version Two</h2>
              <h3>$150</h3>
              <Sizing2 />
              </Col>
              
              <Col>
              <img className='pic1' src={NA14} alt="" />
              <h2>Hiding</h2>
              <h3>$150</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA16} alt="" />
              <h2>Spirit Man</h2>
              <h3>$300</h3>
              <Sizing2 />
              </Col>
              <Col>
              <img className='pic1' src={NA15} alt="" />
              <h2>The Wahoo Catch</h2>
              <h3>$300</h3>
              <Sizing3 />
              </Col>

        </Row>
    </Grid>
    </div>
  )
}

export default Gallery;