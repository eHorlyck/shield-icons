import React, { Component } from 'react'
import SVGIcon from './SVGIcon'
import Badge from './Badge'
import { CopyIcon } from '@primer/octicons-react'


class IconCard extends Component {

    state = {
        isHover: false,
    }


    toggleHover() {
        this.setState({ isHover: !this.state.isHover })
    }

    render() {
        const { data } = this.props
        return (
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-3 col-sm-4 col-xs-6 my-2" key={item.slug}>
                        <div className='card'>
                            <div className='card-img-fluid' style={{ width: '20%', margin: '10px auto', display: 'block' }}>
                                <SVGIcon svg={item.svg} alt={item.title} />
                            </div>

                            <div
                                className="card-body text-center overflow-auto"
                                onMouseEnter={()=>this.toggleHover()}
                                onMouseLeave={()=>this.toggleHover()}
                            >
                                {this.state.isHover ? <CopyIcon/> : <Badge title={item.title} hex={item.hex} />}
                            </div>
                            <div className="card-footer" style={{ backgroundColor: `#${item.hex}` }}>
                                <small className='text-light'>{`#${item.hex}`}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default IconCard
