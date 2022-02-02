import React, { useState } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon, BugIcon } from '@primer/octicons-react'
import classes from '../styles/all.module.css'


const Search = ({ downloadType, search, type }) => {

    const [stickyNav, setStickyNav] = useState(false)

    const handleDownload = (e) => {
        downloadType(e.target.value)
    }

    const handleChange = (e) => {
        search(e.target.value)
    }

    const handleScroll = () => {
        if (window.scrollY >= 140) {
            setStickyNav(true)
        } else {
            setStickyNav(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    return (
        <section className={stickyNav ? `${classes.navbar && classes.active} sticky-top` : `${classes.navbar}`} >
            <div className={`container pb-4 pt-2`}>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by brand..."
                            onChange={handleChange}
                            data-toggle="tooltip" 
                            title='Search by brand'
                        />
                    </div>

                    <div className={`col-md-3 ${classes.download}`}>
                        <div className="btn-group" role="group" style={{ border: '1px solid #6c757d', borderRadius: '0.25rem' }}>
                            <button className={type === 'svg' ? `btn btn-secondary ${classes.option}` : `btn ${classes.option}`} value='svg'
                                onClick={handleDownload} data-toggle="tooltip" title='Download SVG Format'>
                                SVG
                            </button>
                            <button className={type === 'png' ? `btn btn-secondary ${classes.option}` : `btn ${classes.option}`} value='png'
                                onClick={handleDownload} data-toggle="tooltip" title='Download PNG Format'>
                                PNG
                            </button>
                        </div>
                    </div>

                    <div className="col-md-5" >
                        <ul className={`nav justify-content-md-end justify-content-sm-center ${classes.searchNav}`}>
                            <li className="nav-item" data-toggle="tooltip" title='Author'>
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank' rel="noopener noreferrer">
                                    {<PersonIcon size='22' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Forked Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank' rel="noopener noreferrer">
                                    {<RepoForkedIcon size='22' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Star Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank' rel="noopener noreferrer">
                                    {<StarIcon size='22' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='License'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank' rel="noopener noreferrer">
                                    {<LawIcon size='22' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Bug Report'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/issues/new" target='_blank' rel="noopener noreferrer">
                                    {<BugIcon size='22' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Support'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge#support" target='_blank' rel="noopener noreferrer">
                                    {<HeartIcon size='22' />}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Search;