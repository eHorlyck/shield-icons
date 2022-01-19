import React from 'react';
import ReactMarkdown from 'react-markdown';

const Badge = ({ title, hex }) => {
    // console.log(title)
    // console.log(hex)
    const matchTitle=new RegExp(/\s/g)
    // console.log(title.match(matchTitle))
    const relpaceTitle=title.replace(matchTitle,'-')

    const markdown = `![](https://img.shields.io/badge/${relpaceTitle}-${hex}?style=for-the-badge&logo=${relpaceTitle}&logoColor=white)`
    // console.log(markdown)
    // const markdown=`## Hi`

    return (
        <>
            <ReactMarkdown children={markdown} />
        </>
    )
};

export default Badge;
