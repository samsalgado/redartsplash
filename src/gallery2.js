import React, { useMemo } from 'react'
import Sizing2 from './contact/large.js'
import finish from './Pictures/finishline.webp'
import deep from './Pictures/deepend.webp'
import woman from './Pictures/woman.webp'
import promotion from './Pictures/promotion.webp'
import rhythm from './Pictures/rhythm.webp'
import Mind from './Pictures/NA3.jpg'
import Death from './Pictures/NA8.jpg'
import Advice from './Pictures/NA9.jpg'
import Hope from './Pictures/NA10.jpg'
import Street from './Pictures/NA11.jpg'
import SpiritMan from './Pictures/NA16.jpg'
import Hiding from './Pictures/NA14.jpg'
import helping from './Pictures/helping.webp'
import joy from './Pictures/joy.webp'
import pursuit from './Pictures/NA1.jpg'
import confidentwoman from './Pictures/confidentwoman.webp'
import see from './Pictures/see.webp'
import {Grid, Row, Col} from 'react-flexbox-grid'

import waiting from './Pictures/waitingroom.webp'
const Gallery2 = () => {
    const art1 = useMemo(() =>
    [
        {
                id: 1,
                src:{finish},
                name:'Victory Lap',
                price:'SOLD'
        },
        {
            id: 2,
            src:{deep},
            name:'The Deep End',
            price:'SOLD'
        },
        {
            id:3,
            src:{woman},
            name:'Every Woman',
            price:'SOLD'
        },
        {
            id:4,
            src:{promotion},
            name:'Promotion',
            price:'SOLD'
        
        },
        {
            id:5,
            src:{rhythm},
            name:'Rhythm On My Mind',
            price:'SOLD'
        },
        {
            id:6,
            src:{see},
            name:'Collectively We See',
            price:'SOLD'
        },
        {
            id:7,
            src:{pursuit},
            name:'The Pursuit Of Justice',
            price:'SOLD'
        },
        {
            id:8,
            src:{Mind},
            name:'On My Mind',
            price:'SOLD'
        },
        {
            id:9,
            src:{Death},
            name:'Death By A Thousand Cuts',
            price:'SOLD'
        },
        {
            id:10,
            src:{Advice},
            name:'Advice To My Daughter',
            price:'SOLD'
        },
        {
            id:11,
            src:{Hope},
            name:'The Hope Of A Generation',
            price:'$350'
        },
        {
            id:12,
            src:{Street},
            name:'Street Life',
            price:'$400'
        },
        {
            id:13,
            src:{SpiritMan},
            name:'Spirit Man',
            price:'$400'
        },
        {
            id:14,
            src:{Hiding},
            name:'Hiding',
            price:'SOLD'
        },
        {
            id:15,
            src:{helping},
            name:'Overcome With Grief',
            price:'$400'
        },
        {
            id:16,
            src:{joy},
            name:'Joy Expressed',
            price:'SOLD'
        },
        {
            id:17,
            src:{pursuit},
            name:'The Pursuit Of Justice',
            price:'SOLD'
        },
        {
            id:18,
            src:{waiting},
            name:'The Waiting Room',
            price:'$350'
        },
        {
            id:19,
            src:{confidentwoman},
            name:'The Confident Woman',
            price:'$400'
        }
    ],
    []
    )
return (
    <div>
    <Grid>
        <Row>
            <Col>
                {art1.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.src} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing2 />
                    </div>
                  )
                })}
              </Col>
                
        </Row>
    </Grid>
    </div>

    )
}
export default Gallery2