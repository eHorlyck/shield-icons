import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon, BugIcon } from '@primer/octicons-react'
import classes from '../styles/search.module.css'

class Search extends Component {


    handleChange = (e) => {
        this.props.search(e.target.value)
    }


    render() {
        // const visitor = this.props.visitor
        // console.log(visitor)
        return (
            <div className={`${classes.navbar} container pb-4 pt-1 `}>
                <div className="row">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by brand..."
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-2 ">
                        <div className="d-flex justify-content-around border">
                            <button className="btn">SVG</button>
                            <button className="btn">PDF</button>
                        </div>
                    </div>

                    <div className="col-md-7" >
                        <ul className="nav justify-content-md-end justify-content-sm-center">
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Author'>
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank' rel="noopener noreferrer">
                                    {<PersonIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Forked Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank' rel="noopener noreferrer">
                                    {<RepoForkedIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Star Repository'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank' rel="noopener noreferrer">
                                    {<StarIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='License'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank' rel="noopener noreferrer">
                                    {<LawIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className={`nav-item ${classes.hoverIcon}`} data-toggle="tooltip" title='Bug Report'>
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/issues/new" target='_blank' rel="noopener noreferrer">
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
