import React, { useMemo } from 'react'
import Sizing2 from './contact/large.js'
import "./Images";
import Images from './Images'
import {Grid, Row} from 'react-flexbox-grid'

const Gallery2 = () => {
    const art1 = useMemo(() =>
    [
        {
                id: 1,
                image:Images.finishline,
                name:'Victory Lap',
                price:'SOLD'
        },
        {
            id: 2,
            image:Images.deepend,
            name:'The Deep End',
            price:'SOLD'
        },
        {
            id:3,
            image:Images.everywoman,
            name:'Every Woman',
            price:'SOLD'
        },
        {
            id:4,
            image:Images.promotion,
            name:'Promotion',
            price:'SOLD'
        
        },
        {
            id:5,
            image:Images.rhythm,
            name:'Rhythm On My Mind',
            price:'SOLD'
        },
        {
            id:6,
            image:Images.see,
            name:'Collectively We See',
            price:'SOLD'
        },
        {
            id:7,
            image:Images.pursuitofjustice,
            name:'The Pursuit Of Justice',
            price:'SOLD'
        },
        {
            id:8,
            image:Images.onmymind,
            name:'On My Mind',
            price:'SOLD'
        },
        {
            id:9,
            image:Images.cuts,
            name:'Death By A Thousand Cuts',
            price:'SOLD'
        },
        {
            id:10,
            image:Images.advice,
            name:'Advice To My Daughter',
            price:'SOLD'
        },
        {
            id:11,
            image:Images.hope,
            name:'The Hope Of A Generation',
            price:'$350'
        },
        {
            id:12,
            image:Images.streetlife,
            name:'Street Life',
            price:'$400'
        },
        {
            id:13,
            image:Images.spiritman,
            name:'Spirit Man',
            price:'$400'
        },
        {
            id:14,
            image:Images.hiding,
            name:'Hiding',
            price:'SOLD'
        },
        {
            id:15,
            image:Images.helping,
            name:'Overcome With Grief',
            price:'$400'
        },
        {
            id:16,
            image:Images.joy,
            name:'Joy Expressed',
            price:'SOLD'
        },
       
        {
            id:17,
            image:Images.waitingroom,
            name:'The Waiting Room',
            price:'$350'
        },
        {
            id:18,
            image:Images.confidentwoman,
            name:'The Confident Woman',
            price:'$400'
        },
        {
            id:19,
            image:Images.sculpted,
            name:'Sculpted',
            price: 'SOLD'
        }
    ],
    []
    )
return (
    <div>
    <Grid>
        <Row>
            
                {art1.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.image} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing2 />
                    </div>
                  )
                })}
              
                
        </Row>
    </Grid>
    </div>

    )
}
export default Gallery2