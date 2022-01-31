import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon, BugIcon, MoonIcon, SunIcon } from '@primer/octicons-react'
import classes from '../styles/search.module.css'



class Search extends Component {


    // handleTheme = e => {
    //     console.log(e.target.value)
    //     this.props.theme(e.target.value)
    // }


    handleDownload = (e) => {
        this.props.downloadType(e.target.value)
    }

    handleChange = (e) => {
        this.props.search(e.target.value)
    }

    render() {
        // const visitor = this.props.visitor
        // console.log(visitor)
        // console.log(this.props.type)
        // console.log(this.props.mode)
        // console.log(this.props)
        const { type } = this.props

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
                            {/* <div className="col-md-5">
                                <div className="btn-group" role="group" style={{ border: '1px solid #6c757d', borderRadius: '0.25rem' }}>
                                    <button className={'light' ? `btn btn-secondary ${classes.custom}` : `btn ${classes.custom}`} id="option1" onClick={this.handleTheme} value='light'>
                                        D
                                    </button>
                                    <button className={'dark' ? `btn btn-secondary ${classes.custom}` : `btn ${classes.custom}`} onClick={this.handleTheme} value='dark'>
                                        N
                                    </button>
                                </div>
                            </div> */}

                            <div className="col-md-5">
                                <div className="btn-group" role="group" style={{ border: '1px solid #6c757d', borderRadius: '0.25rem' }}>
                                    <button className={type === 'svg' ? `btn btn-secondary ${classes.custom}` : `btn ${classes.custom}`} value='svg'
                                        onClick={this.handleDownload}>
                                        SVG
                                    </button>
                                    <button className={type === 'png' ? `btn btn-secondary ${classes.custom}` : `btn ${classes.custom}`} value='png'
                                        onClick={this.handleDownload}>
                                        PNG
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
