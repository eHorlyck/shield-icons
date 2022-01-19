import React from 'react';
import ReactMarkdown from 'react-markdown';

const Badge = ({ title, hex }) => {
    // console.log(title)
    // console.log(hex)
    const markdown = `![](https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=white)`
    // console.log(markdown)
    // const markdown=`## Hi`

    return (
        <>
            <ReactMarkdown children={markdown} />
        </>
    )
};

export default Badge;
