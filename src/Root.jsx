import React, { Component, Suspense, lazy } from 'react'
import simpleClass from './services/main'
import { Spinner } from './components'
const Header = lazy(() => import('./components/Header'))
const BadgeCard = lazy(() => import('./components/BadgeCard'))
const Footer = lazy(() => import('./components/Footer'))


const data = new simpleClass()


class Root extends Component {

    state = {
        data: data.getIcon()
    }


    render() {

        const data = this.state.data

        return (
            <>
                <Suspense fallback={<Spinner />}>
                    <Header />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    {<BadgeCard data={data} />}
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <Footer />
                </Suspense>
            </>
        )
    }
}

export default Root
