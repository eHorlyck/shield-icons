import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard'

class Badge extends Component {

    render() {
        const { title, hex } = this.props
        // console.log(title[31])
        // console.log(hex)
        const matchTitle = new RegExp(/\s/g)
        // console.log(title.match(matchTitle))
        const relpaceTitle = title.replace(matchTitle, '%20')

        const markdown = `![](https://img.shields.io/badge/${relpaceTitle}-${hex}?style=for-the-badge&logo=${relpaceTitle}&logoColor=white)`
        // console.log(markdown)
        // const markdown=`## Hi`
        
        return (
            <>
                <ReactMarkdown children={markdown} />
            </>
        )
    }
};

export default Badge;
