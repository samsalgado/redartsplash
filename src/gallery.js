import React, { useMemo } from 'react'
import Stage from './Pictures/NA5.jpg'
import Prayer from './Pictures/quickprayer.webp'
import Sylinda from './Pictures/Sylinda.webp'
import Laura from './Pictures/Laura.webp'
import Ella from './Pictures/Ella.webp'
import cousins from './Pictures/matchingcousins.webp'
import sttropez from './Pictures/tropez.webp'
import hershape from './Pictures/hershape.webp'
import spiritwalk from './Pictures/spiritwalk2.webp'
import fineat60 from './Pictures/60.webp'
import stage4breastcancer from './Pictures/stage4breastcancer.webp'
import we from './Pictures/we.webp'
import entangled from './Pictures/entangled.webp'
import Sizing from './contact/small.js'
import ruby from './Pictures/NA2.jpg'
import pain from './Pictures/NA7.jpg'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Gallery2 from './gallery2'
import Gallery3 from './gallery3'
const Gallery = () => {
  const art = useMemo(() => 
    [
      {
        id: 1,
        src: {Prayer},
        name: 'Lost in Meditation',
        price: 'SOLD'
      },
      {
        id:2,
        src:{Sylinda},
        name:'Deep Thoughts',
        price: 'SOLD'
      },
      {
        id:3,
        src:{Laura},
        name:'Laura',
        price:'SOLD'
      },
      {
        id:4,
        src:{cousins},
        name:'Matching Cousins',
        price:'SOLD'
      },
      {
        id:5,
        src:{hershape},
        name:'Her Shape',
        price:'SOLD'
      },
      {
        id:6,
        src:{spiritwalk},
        name:'Spirit Walk Two',
        price:'SOLD'
      },
      {
        id:7,
        src:{stage4breastcancer},
        name:'Stage Four Breast Cancer Collection',
        price:'SOLD'
      },
      {
        id:8,
        src:{fineat60},
        name:'Sculpted',
        price:'SOLD'
      },
      {
        id:9,
        src:{we},
        name:'We The People',
        price:'SOLD'
      },
      {
        id:10,
        src:{entangled},
        name:'Entangled',
        price:'SOLD'
      },
      {
        id:11,
        src:{ruby},
        name:'Ruby',
        price:'$350'
      },
      {
        id:12,
        src:{Stage},
        name:'On Stage',
        price:'SOLD'
      },
      {
        id:13,
        src:{pain},
        name:'My Pain In The Rain',
        price:'SOLD'
      },
      {
        id:14,
        src:{Ella},
        name:'Ella',
        price:'SOLD'
      },
      {
        id:15,
        src:{sttropez},
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
            <Col>
                {art.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.src} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing />
                    </div>
                  )
                })}
              </Col>
                <Col>
                  <Gallery2 />
                </Col>
                <Col>
                  <Gallery3 />
                </Col>
        </Row>
    </Grid>
    </div>
  )
}

export default Gallery;