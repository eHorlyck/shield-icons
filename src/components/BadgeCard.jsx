import { DownloadIcon } from '@primer/octicons-react';
import { saveAs } from 'file-saver';
import React, { lazy, Suspense, useState } from 'react';
import DownloadLink from "react-download-link";
import classes from '../styles/all.module.css';
import { CopyHex, Spinner } from './';
import SVGToImage from './SVGToImage';
const SVGIcon = lazy(() => import('./SVGIcon'))
const Badge = lazy(() => import('./Badge'))
const Search = lazy(() => import('./Search'))


const BadgeCard = ({ data }) => {

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
                                <div className={`card ${classes.badgeCard}`}>
                                    <div className={`card-img-fluid ${classes.img}`}>
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

                                        <div className="card-footer w-75 "
                                            style={{ backgroundColor: `#${item.hex}`, cursor: 'pointer' }}>
                                            <small className={`text-light text-center ${classes.hexText} `}>
                                                < CopyHex hex={item.hex} />
                                            </small>
                                        </div>

                                        <>
                                            {
                                                downloadType === 'svg' ?
                                                    < DownloadLink
                                                        className={`card-footer w-25 text-center ${classes.icon} `}
                                                        style={{ borderRadius: '0 0 14px 0' }}
                                                        label={<DownloadIcon fill='#333' />}
                                                        filename={`${item.title}.${downloadType}`}
                                                        exportFile={() => item.svg}
                                                    /> :

                                                    <button
                                                        className={`${classes.icon} card-footer  w-25`}
                                                        style={{ borderRadius: '0 0 14px 0', border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.125)' }}
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
export default BadgeCard
