import React from 'react'
import './CardOne.css'

export const CardOne = ({data}) => {
    return  <div style={{backgroundImage: `url(${data.img})`}} className='card'>


        {/* <h3>{data.title} </h3> */}
     
    </div>
}