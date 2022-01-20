import React, { Component } from 'react'
import IconCard from './components/IconCard'
import Header from './components/Header'
import simpleClass from './services/main'


const data = new simpleClass()

class Root extends Component {

    state = {
        data: data.getIcon()
    }

    render() {
        // console.log(this.state.data)
        const data = this.state.data

        return (
            <>
                <>
                    <Header />
                </>
                <>
                    <IconCard data={data} />
                </>
            </>
        )
    }
}

export default Root

