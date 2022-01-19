import React, { Component } from 'react'
import SVGIcon from './SVGIcon'
import Badge from './Badge'
import { CopyToClipboard } from 'react-copy-to-clipboard'



class IconCard extends Component {

    state = {
        value: '',
        copied: false
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
                            < >
                                <Badge title={item.title} hex={item.hex} />
                            </>
                            <div
                                className="card-footer"
                                style={{ backgroundColor: `#${item.hex}`, cursor: 'pointer' }}
                            >
                                <CopyToClipboard text={this.state.value}>
                                    <small
                                        className='text-light'
                                        onClick={() => this.setState({ value: item.hex, copied: true })}
                                    >
                                        {`#${item.hex}`}
                                    </small>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default IconCard
