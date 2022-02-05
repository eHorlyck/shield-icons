import React, { Component, Suspense, lazy } from 'react'
import simpleClass from './services/main'
import { Spinner } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<Header />} />
                    </Routes>
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<BadgeCard data={data} />} />
                    </Routes>
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<Footer />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default Root
