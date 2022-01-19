import React from 'react'
import SVGIcon from './SVGIcon'
import Badge from './Badge'


const IconCard = ({ data }) => {
    return (
        <div className="row">
            {data.map((item) => (
                <div className="col-md-3 col-sm-4 col-xs-6 my-2" key={item.slug}>
                    <div className='card'>
                        <div className='card-img-fluid' style={{ width: '20%', margin: '10px auto', display: 'block' }}>
                            <SVGIcon svg={item.svg} />
                        </div>
                        <div className="card-body">
                            <p>{item.title}</p>
                            <Badge title={item.title} hex={item.hex} />
                        </div>
                        <div className="card-footer">
                            <small>{item.hex}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default IconCard
