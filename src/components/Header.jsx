import React from 'react';
import InlineSVG from 'svg-inline-react';
import classes from '../styles/all.module.css';
const simpleIcons = require('simple-icons');

const Header = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className={`col-md-6 ${classes.heading}`} style={{ fontWeight: '500' }}>
                    <h3><strong>Web Badge</strong></h3>
                    <p className='m-0'>2152 Free Badges & <abbr title='Scalable Vector Graphics' className='initialism'>SVG</abbr> of popular brands</p>
                </div>
                <div className="col-md-6">
                    <ul className={`nav justify-content-md-end justify-content-sm-center ${classes.icon}`}>
                        <li className={`nav-item `} >
                            <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('github').svg} />}
                            </a>
                        </li>
                        <li className={`nav-item `} >
                            <a className="nav-link" href="https://ko-fi.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('kofi').svg} />}
                            </a>
                        </li>
                        <li className={`nav-item `} >
                            <a className="nav-link" href="https://patreon.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('patreon').svg} />}
                            </a>
                        </li>
                        <li className={`nav-item `} >
                            <a className="nav-link" href="https://buymeacoffee.com/mrhrifat" target="_blank" rel="noopener noreferrer">
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
