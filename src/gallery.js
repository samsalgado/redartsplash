import React, { useMemo } from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import Gallery2 from './gallery2'
import "./Images"
import Sizing from './contact/small'
import Gallery3 from './gallery3'
import Images from './Images'
const Gallery = () => {
  const art = useMemo(() => 
    [
      {
        id: 1,
        image: Images.meditation
        ,
        name: 'Lost in Meditation',
        price:'SOLD'
      },
      {
        id:2,
        image:Images.deepthoughts,
        name:'Deep Thoughts',
        price: 'SOLD'
      },
      {
        id:3,
        image:Images.laura,
        name:'Laura',
        price:'SOLD'
      },
      {
        id:4,
        image:Images.matchingcousins,
        name:'Matching Cousins',
        price:'SOLD'
      },
      {
        id:5,
        image:Images.hershape,
        name:'Her Shape',
        price:'SOLD'
      },
      {
        id:6,
        image:Images.spiritwalk,
        name:'Spirit Walk Two',
        price:'SOLD'
      },
      {
        id:7,
        image:Images.stage4cancer,
        name:'Stage Four Breast Cancer Collection',
        price:'SOLD'
      },
      
      {
        id:8,
        image:Images.wethepeople,
        name:'We The People',
        price:'SOLD'
      },
      {
        id:9,
        image:Images.entangled,
        name:'Entangled',
        price:'SOLD'
      },
      {
        id:10,
        image:Images.ruby,
        name:'Ruby',
        price:'$350'
      },
      {
        id:11,
        image:Images.onstage,
        name:'On Stage',
        price:'SOLD'
      },
      {
        id:12,
        image:Images.paininrain,
        name:'My Pain In The Rain',
        price:'SOLD'
      },
      {
        id:13,
        image:Images.ella,
        name:'Ella',
        price:'SOLD'
      },
      {
        id:14,
        image:Images.tropez,
        name:'Saint Tropez',
        price:'SOLD'
      }
    
    ],
    []
  )
  return (
    <div>
    <h1 className='gallery'>Gallery</h1>
    <Grid>
        <Row>
            
                {art.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.image} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing />
                    </div>
                  )
                })}
              
                
                  <Gallery2 />
              
                
                  <Gallery3 />
                  
                
        </Row>
    </Grid>
    </div>
  )
}

export default Gallery;