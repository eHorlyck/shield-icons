import React from 'react'
import SVGIcon from './SVGIcon'


const IconCard = ({ data }) => {
    return (
        data.map((item, key) => (
            <div className='card' style={{ width: '15%' }}>
                <div className='card-img-top'>
                    <SVGIcon svg={item.svg} />
                </div>
                <div className="card-body">
                    <p>{data.title}</p>
                    <p></p>
                </div>
            </div>
        ))
    )
}
export default IconCard
