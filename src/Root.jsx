import React, { Component } from 'react'
import icons from './services/icons'
import IconCard from './components/IconCard'
import Header from './components/Header'


const icon = new icons()

class Root extends Component {

    state = {
        data: icon.getIcon(),
    }

    render() {
        // console.log(this.state.data)
        const data = this.state.data

        return (
            <>
                <>
                    <Header />
                </>
                <div className='container'>
                    <IconCard data={data} />
                </div>
            </>
        )
    }
}

export default Root

