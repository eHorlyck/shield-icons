import React from 'react';
import classes from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className='container pt-5 pb-2'>
            <div className="row">
                <div className="col-md-8">
                    <p className={classes.footer}>
                        A <a href='https://github.com/mrhrifat/web-badge/blob/master/LICENSE.md' target='_blank' rel="noopener noreferrer">GPL-3.0</a> project created by <a href='https://github.com/mrhrifat' target='_blank' rel="noopener noreferrer">Mrh Rifat</a>.
                        <br /> Use <a href='https://github.com/mrhrifat/web-badge' target='_blank' rel="noopener noreferrer">GitHub</a> for requests, corrections and report.
                        <br /> If you appreciate what I do and wish to support my work, you can  <a href='https://github.com/mrhrifat/web-badge#support' target='_blank' rel="noopener noreferrer">support</a> me.
                        <br /> All of your support will go for donation.
                    </p>
                </div>
                <div className="col-md-4 align-self-center">
                    <button className='btn btn-primary' style={{ backgroundColor: '#1da1f2', border: 'none' }}>
                        <a href='https://twitter.com/intent/tweet?url=https://webbadges.netlify.app&text=Web Badge: free Badge for Markdown or Web.' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }}>Share on Twitter</a>
                    </button>
                </div>
            </div>
            <div className="col-md-12 text-center">
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Made with <span style={{ fontSize: '20px', color: '#E23744' }}>❤️</span> for Developers</p>
            </div>
        </div>
    )
};

export default Footer;
