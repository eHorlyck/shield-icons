import React, { Component, useState } from 'react'
import SVGIcon from './SVGIcon'
import Badge from './Badge'
import Search from './Search'


const IconCard = ({ data }) => {

    const [search, setSearch] = useState('')

    return (
        <>
            <Search search={(e) => setSearch(e)} />



            <div className="container">

                

                <div className="row">
                    {data.filter(item => {
                        if (search === '') {
                            return item
                        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((item) => (
                        <div className="col-md-3 col-sm-4 col-xs-6 my-2" key={item.slug}>
                            <div className='card'>
                                <div className='card-img-fluid' style={{ width: '20%', margin: '10px auto', display: 'block' }}>
                                    <SVGIcon svg={item.svg} alt={item.title} />
                                </div>
                                < >
                                    <Badge title={item.title} hex={item.hex} />
                                </>

                                <div
                                    className="card-footer text-center"
                                    style={{ backgroundColor: `#555555`, cursor: 'pointer' }}
                                >
                                    <small className='text-light'>
                                        {
                                            `${item.title}`
                                        }
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default IconCard
