import React, { Component, Suspense, lazy } from 'react'
import simpleClass from './services/main'
import Spinner from './components/Spinner'
const Header = lazy(() => import('./components/Header'))
const IconCard = lazy(() => import('./components/IconCard'))



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
                <Suspense fallback={<Spinner />}>
                    <Header />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    {<IconCard data={data} />}
                </Suspense>
            </>
        )
    }
}

export default Root

