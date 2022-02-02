import React, { useState, Suspense, lazy } from 'react'
import Spinner from './Spinner'
import DownloadLink from "react-download-link";
import { DownloadIcon } from '@primer/octicons-react'
import classes from '../styles/badgeCard.module.css'
import CopyHex from './CopyHex';
import { saveAs } from 'file-saver';
import SVGToImage from './SVGToImage'
const SVGIcon = lazy(() => import('./SVGIcon'))
const Badge = lazy(() => import('./Badge'))
const Search = lazy(() => import('./Search'))


const IconCard = ({ data }) => {

    const [search, setSearch] = useState('')
    const [downloadType, setDownloadType] = useState('svg')

    const downloadPNG = (svg, fileName) => {

        SVGToImage({
            svg: svg,
            mimetype: "image/png",
            width: 250,
            height: 250,
            quality: 1,
            outputFormat: "base64"
        })
            .then(outputData => {
                saveAs(outputData, fileName)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Search search={(e) => setSearch(e)} downloadType={(e) => setDownloadType(e)} type={downloadType} />
            </Suspense>

            <div className="container">
                <div className="row">
                    {data
                        .filter((item) => {
                            if (search === '') {
                                return item
                            } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        })
                        .map((item) => (
                            <div className="col-md-3 col-sm-4 col-xs-6 my-2" key={item.slug}>
                                <div className='card' style={{ borderRadius: '1rem' }}>
                                    <div className='card-img-fluid' style={{ width: '20%', margin: '10px auto', display: 'block' }}>
                                        <Suspense fallback={<Spinner />}>
                                            <SVGIcon
                                                svg={item.svg}
                                                alt={item.title}
                                            />
                                        </Suspense>
                                    </div>
                                    < >
                                        <Suspense fallback={<Spinner />}>
                                            <Badge title={item.title} hex={item.hex} />
                                        </Suspense>
                                    </>

                                    <div className="d-flex">
                                        <div className="card-footer w-75"
                                            style={{ backgroundColor: `#${item.hex}`, cursor: 'pointer' }}>
                                            <small className={`${classes.custom} text-light text-center`}>
                                                < CopyHex hex={item.hex} />
                                            </small>
                                        </div>
                                        <>
                                            {
                                                downloadType === 'svg' ?
                                                    < DownloadLink
                                                        label={<DownloadIcon fill='#333' />}
                                                        filename={`${item.title}.${downloadType}`}
                                                        exportFile={() => item.svg}
                                                        className={`${classes.hoverIcon} card-footer text-center w-25`}
                                                        style={{ cursor: 'pointer', borderRadius: '0 0 14px 0' }}
                                                    /> :

                                                    <button
                                                        className={`${classes.hoverIcon} card-footer w-25`}
                                                        style={{ cursor: 'pointer', borderRadius: '0 0 14px 0', border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.125)' }}
                                                        onClick={() => downloadPNG(item.svg, `${item.title}.${downloadType}`)}
                                                    >
                                                        <DownloadIcon fill='#333' />
                                                    </button>
                                            }
                                        </>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
export default IconCard