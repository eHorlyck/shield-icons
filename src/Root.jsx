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
        
    }
}

export default Root

