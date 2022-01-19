import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon, StarIcon, HeartIcon } from '@primer/octicons-react'
import Dark from './Dark';



class Search extends Component {

    render() {
        return (
            <div className='container pb-3'>
                <div className="row">
                    <div className="col-md-3  align-self-center ">
                        <input type="text" className="form-control" placeholder="Search by brand..." />
                    </div>
                    <div className="col-md-2">
                        {/* <Dark /> */}
                    </div>
                    <div className="col-md-7" >
                        <ul class="nav justify-content-end align-items-center">
                            <li class="nav-item" style={{ width: '63px' }} >
                                <a class="nav-link" href="#">
                                    {<PersonIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li class="nav-item" style={{ width: '70px' }} >
                                <a class="nav-link" href="#">
                                    {<RepoForkedIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li class="nav-item" style={{ width: '70px' }} >
                                <a class="nav-link" href="#">
                                    {<LawIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li class="nav-item" style={{ width: '70px' }} >
                                <a class="nav-link" href="#">
                                    {<StarIcon size='medium' fill='#000' aria-label="Add new item" />}
                                </a>
                            </li>
                            <li class="nav-item" style={{ width: '70px' }} >
                                <a class="nav-link" href="#">
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
