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
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by brand..."
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-8" >
                        <ul className="nav justify-content-md-end justify-content-sm-center">
                            <li className="nav-item" data-toggle="tooltip" title='Author' className={classes.hoverIcon} >
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank' rel="noopener noreferrer">
                                    {<PersonIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Forked Repository' className={classes.hoverIcon} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank' rel="noopener noreferrer">
                                    {<RepoForkedIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Star Repository' className={classes.hoverIcon} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank' rel="noopener noreferrer">
                                    {<StarIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='License' className={classes.hoverIcon} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank' rel="noopener noreferrer">
                                    {<LawIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Bug Report' className={classes.hoverIcon} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/issues/new" target='_blank' rel="noopener noreferrer">
                                    {<BugIcon size='22' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" title='Support' className={classes.hoverIcon} >
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
