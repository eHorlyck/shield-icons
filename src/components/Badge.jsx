import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon } from '@primer/octicons-react'

class Badge extends Component {

    state = {
        isHover: false,
    }
    toggleHover() {
        this.setState({ isHover: !this.state.isHover })
    }

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
            <div className="card-body text-center overflow-auto" style={{ minHeight: '80px' }}
                onMouseEnter={() => this.toggleHover()}
                onMouseLeave={() => this.toggleHover()}
            >
                {this.state.isHover ? <CopyIcon /> : <ReactMarkdown children={markdown} />}
            </div>
        )
    }
};

export default Badge;
