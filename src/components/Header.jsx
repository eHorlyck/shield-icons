import React from 'react';
import InlineSVG from 'svg-inline-react';
import { RepoForkedIcon, PersonIcon, LawIcon } from '@primer/octicons-react'
const simpleIcons = require('simple-icons');

const Header = () => {
    const author = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="000000" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>`
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <h3>Web Badge</h3>
                    <p>2152 Free Badges of popular brands</p>
                </div>
                <div className="col-md-6" >
                    <ul class="nav">
                        <li class="nav-item" style={{ width: '70px' }} >
                            <a class="nav-link" href="#">
                                {<InlineSVG src={simpleIcons.Get('github').svg} />}
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: '70px' }} >
                            <a class="nav-link" href="#">
                                {<InlineSVG src={simpleIcons.Get('kofi').svg} />}
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: '70px' }} >
                            <a class="nav-link" href="#">
                                {<InlineSVG src={simpleIcons.Get('patreon').svg} />}
                            </a>
                        </li>
                        <li class="nav-item" style={{ width: '70px' }} >
                            <a class="nav-link" href="#">
                                {<InlineSVG src={simpleIcons.Get('buymeacoffee').svg} />}
                            </a>
                        </li>
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
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;
