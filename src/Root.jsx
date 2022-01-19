import React, { Component } from 'react'
import icons from './services/icons'
import IconCard from './components/IconCard'


const icon = new icons()

class Root extends Component {

    state = {
        data: icon.getIcon(),
    }

    render() {
        // console.log(this.state.data)
        const data = this.state.data

        return (
            <div className='w-25 h-25'>
                <IconCard data={data} />
            </div>
        )
    }
}

export default Root

