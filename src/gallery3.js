import React, {useMemo} from 'react'
import Images from './Images'
import "./Images"
import Sizing3 from './contact/xlarge.js'
import {Grid, Row} from 'react-flexbox-grid'
const Gallery3 = () => {
    const art3 = useMemo(() =>
[
    {
        id:1,
        image:Images.wahoo,
        name:'The Wahoo Catch',
        price:'SOLD'
    },
    {
        id:2,
        image:Images.fam,
        name:'The Family United',
        price:'SOLD'
    },
    {
        id:3,
        image:Images.wethepeople,
        name:'We The People',
        price:'SOLD'
    },
    {
        id:4,
        image:Images.wemarch,
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
            
                {art3.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.image} alt="" />
                    <h3>{val.name}</h3>
                    <h3>{val.price}</h3>
                    <Sizing3 />

                    </div>
                  )
                })}
              
                
        </Row>
    </Grid>
    </div>

)
}
export default Gallery3