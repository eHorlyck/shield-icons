import React, { useState, Suspense, lazy } from 'react'
import Spinner from './Spinner'
import DownloadLink from "react-download-link";
import { DownloadIcon } from '@primer/octicons-react'
import classes from '../styles/iconCard.module.css'
import CopyHex from './CopyHex';
import { saveAs } from 'file-saver';
import SVGToImage from './SVGToImage'
const SVGIcon = lazy(() => import('./SVGIcon'))
const Badge = lazy(() => import('./Badge'))
const Search = lazy(() => import('./Search'))



const IconCard = ({ data }) => {

    const [search, setSearch] = useState('')
    const [downloadType, setDownloadType] = useState('svg')

    const [image, setImage] = useState('')
    // console.log(visitor)
    // console.log(theme)
    // console.log(setTheme)
    SVGToImage({
        // 1. Provide the SVG
        svg: `<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zm-376-1173q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z"/> </svg>`,
        // 2. Provide the format of the output image
        mimetype: "image/png",
        // 3. Provide the dimensions of the image if you want a specific size.
        //  - if they remain in auto, the width and height attribute of the svg will be used
        //  - You can provide a single dimension and the other one will be automatically calculated
        // width: "auto",
        // height: "auto",
        width: 250,
        height: 250,
        // 4. Specify the quality of the image
        quality: 1,
        // 5. Define the format of the output (base64 or blob)
        outputFormat: "base64"
    })
        .then(function (outputData) {
            // If using base64 (outputs a DataURL)
            //  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0...
            // Or with Blob (Blob)
            //  Blob {size: 14353, type: "image/png"}
            // console.log(outputData);
            setImage(outputData)

            // RETURNS
        }).catch(function (err) {
            // Log any error
            console.log(err);
        })

    // console.log(image)

    const downloadBase64Data = (base64String, fileName) => {
        // let file = convertBase64ToFile(base64String, fileName);
        saveAs(base64String, fileName);
    }

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Search search={(e) => setSearch(e)} downloadType={(e) => setDownloadType(e)} type={downloadType} />
            </Suspense>


            <div className="container">

                <img src={image} alt="icon" />

                <button onClick={() => downloadBase64Data(image, `hi.png`)}>Download</button>


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
                                                {/* {
                                                `#${item.hex}`
                                            } */}
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
                                                        className={`${classes.hoverIcon} card-footer w-25`}
                                                        style={{ cursor: 'pointer', borderRadius: '0 0 14px 0' }}
                                                    /> :
                                                    < DownloadLink
                                                        label={<DownloadIcon fill='#333' />}
                                                        filename={`${item.title}.${downloadType}`}
                                                        exportFile={() => image}
                                                        className={`${classes.hoverIcon} card-footer w-25`}
                                                        style={{ cursor: 'pointer', borderRadius: '0 0 14px 0' }}
                                                    />
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