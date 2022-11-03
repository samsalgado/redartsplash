import React, {useMemo} from 'react'
import Wahoo from './Pictures/NA15.jpg';
import ThePeople from './Pictures/we.webp';
import Wemarch from './Pictures/we.webp';
import fam from './Pictures/NA6.jpg';
import Sizing3 from './contact/xlarge.js'
import {Grid, Row, Col} from 'react-flexbox-grid'

const Gallery3 = () => {
    const art3 = useMemo(() =>
[
    {
        id:1,
        src:{Wahoo},
        name:'The Wahoo Catch',
        price:'SOLD'
    },
    {
        id:2,
        src:{fam},
        name:'The Family United',
        price:'SOLD'
    },
    {
        id:3,
        src:{ThePeople},
        name:'We The People',
        price:'SOLD'
    },
    {
        id:4,
        src:{Wemarch},
        name:'We March',
        price:'SOLD'
    }
],
[]
)
return (
    <div>
    <Grid>
        <Row>
            <Col>
                {art3.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.src} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing3 />
                    </div>
                  )
                })}
              </Col>
                
        </Row>
    </Grid>
    </div>

)
}
export default Gallery3