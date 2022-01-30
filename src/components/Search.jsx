import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon, BugIcon, SunIcon, MoonIcon } from '@primer/octicons-react'
import classes from '../styles/search.module.css'

class Search extends Component {

    state = {
        download: 'svg'
    }

    handleDownload = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            download: e.target.value
        })
    }

    handleChange = (e) => {
        this.props.search(e.target.value)
    }

    render() {
        // const visitor = this.props.visitor
        // console.log(visitor)
        return (
            <div className={`${classes.navbar} container pb-4 pt-1 `}>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by brand..."
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-3">
                        <div className="row" >
                            <div className="col-md-5">
                                <div className="btn-group" role="group">
                                    <button className={`btn ${classes.custom}`} onClick={this.handleDownload}>
                                        <SunIcon />
                                    </button>
                                    <button className={`btn ${classes.custom}`} onClick={this.handleDownload}>
                                        <MoonIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="btn-group" role="group">
                                    <button className={`btn btn-secondary ${classes.removeFocus}`}>
                                        <SunIcon />
                                    </button>
                                    <button className={`btn btn-secondary ${classes.removeFocus}`}>
                                        <MoonIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5" >
                        <ul className="nav justify-content-md-end justify-content-sm-center">
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Author'>
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank' rel="noopener noreferrer" style={{ padding: '7px 10px' }}>
                                    {<PersonIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Forked Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank' rel="noopener noreferrer" style={{ padding: '7px 10px' }}>
                                    {<RepoForkedIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Star Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank' rel="noopener noreferrer" style={{ padding: '7px 10px' }}>
                                    {<StarIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='License'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank' rel="noopener noreferrer" style={{ padding: '7px 10px' }}>
                                    {<LawIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Bug Report'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/issues/new" target='_blank' rel="noopener noreferrer" style={{ padding: '7px 10px' }}>
                                    {<BugIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Support'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge#support" target='_blank' rel="noopener noreferrer">
                                    {<HeartIcon size='22' fill='#000' />}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Search;
