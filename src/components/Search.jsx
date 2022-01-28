import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon, BugIcon } from '@primer/octicons-react'


class Search extends Component {


    handleChange = (e) => {
        this.props.search(e.target.value)
    }

    render() {
        // const visitor = this.props.visitor
        // console.log(visitor)
        return (
            <div className='container pb-5' >
                <div className="row">
                    <div className="col-md-4 align-self-center ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by brand..."
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-8 " >
                        <ul className="nav justify-content-md-end justify-content-sm-center align-items-center">
                            <li className="nav-item"  >
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank' rel="noopener noreferrer">
                                    {<PersonIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item"  >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank' rel="noopener noreferrer">
                                    {<RepoForkedIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item"  >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank' rel="noopener noreferrer">
                                    {<StarIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank' rel="noopener noreferrer">
                                    {<LawIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item"  >
                                <a className="nav-link" href="#" target='_blank' rel="noopener noreferrer">
                                    {<BugIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#" target='_blank' rel="noopener noreferrer">
                                    {<HeartIcon size='medium' fill='#000' />}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
