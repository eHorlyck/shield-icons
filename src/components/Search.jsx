import React, { Component } from 'react';
import { RepoForkedIcon, PersonIcon, LawIcon } from '@primer/octicons-react'
class Search extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Search by brand..." />
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Search;
