import React from 'react';
import InlineSVG from 'svg-inline-react';
const simpleIcons = require('simple-icons');

const Header = () => {
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
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;
