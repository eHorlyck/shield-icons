import React, { Component, Suspense, lazy } from 'react'
// import countapi from 'countapi-js'
import simpleClass from './services/main'
import Spinner from './components/Spinner'
const Header = lazy(() => import('./components/Header'))
const IconCard = lazy(() => import('./components/IconCard'))
const Footer = lazy(() => import('./components/Footer'))



const data = new simpleClass()


class Root extends Component {

    state = {
        data: data.getIcon(),
        visitor: 0
    }

    // componentDidMount() {
    //     countapi.visits('root').then((result) => {
    //         // console.log(result)
    //         this.setState({
    //             visitor: result.value
    //         })
    //     })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    // }

    render() {
        // console.log(this.state.data)
        const data = this.state.data
        // console.log(this.state.visitor)
        // const visitor = this.state.visitor
        // console.log(visitor)
        // console.log(this.props)
        
        return (
            <>
                <Suspense fallback={<Spinner />}>
                    <Header />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    {<IconCard data={data}/>}
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <Footer />
                </Suspense>
            </>
        )
    }
}

export default Root

