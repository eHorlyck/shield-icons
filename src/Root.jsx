import React, { Component } from 'react'
import icons from './services/icons'
import IconCard from './components/IconCard'
import Header from './components/Header'
import Search from './components/Search'


const icon = new icons()

class Root extends Component {

    state = {
        data: icon.getIcon(),
    }

    getBadge = (e) => {
        console.log(e)
        // console.log(this.state.data.map(item => console.log(item.name)))
        // const searchData = this.state.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        const searched = this.state.data.filter(
            item => {
                if (e === '') {
                    return item
                } else if (item.title.toLowerCase().includes(e.toLowerCase())) {
                    console.log(item)
                    return item
                }
            }
        )
        this.setState({ data:searched })
    }
    

    render() {
        console.log(this.state.data)
        const data = this.state.data

        return (
            <>
                <>
                    <Header />
                    <Search getBadge={this.getBadge} />
                </>
                <div className='container'>
                    <IconCard data={data} />
                </div>
            </>
        )
    }
}

export default Root

