import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon } from '@primer/octicons-react'




class Search extends Component {

    render() {
        return (
            <div className='container pb-3'>
                <div className="row">
                    <div className="col-md-3  align-self-center ">
                        <input type="text" className="form-control" placeholder="Search by brand..." />
                    </div>
                    <div className="col-md-9" >
                        <ul className="nav justify-content-end align-items-center">
                            <li className="nav-item" style={{ width: '63px' }} >
                                <a className="nav-link" href="https://github.com/mrhrifat" target='_blank'>
                                    {<PersonIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li className="nav-item" style={{ width: '70px' }} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/fork" target='_blank'>
                                    {<RepoForkedIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li className="nav-item" style={{ width: '70px' }} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target='_blank'>
                                    {<StarIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li className="nav-item" style={{ width: '70px' }} >
                                <a className="nav-link" href="https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md" target='_blank'>
                                    {<LawIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li className="nav-item" style={{ width: '70px' }} >
                                <a className="nav-link" href="#" target='_blank'>
                                    {<HeartIcon size='medium' fill='#000' aria-label="Add new item" />}
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
