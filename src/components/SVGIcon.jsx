import React from 'react'
import InlineSVG from 'svg-inline-react';


const SVGIcon = ({ svg }) => {
    // console.log(data[0].svg)
    return (
        // console.log(item.svg)
        <InlineSVG src={svg} />
    )
}
export default SVGIcon
