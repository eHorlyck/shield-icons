import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon, CheckCircleFillIcon } from '@primer/octicons-react'

class Badge extends Component {

    state = {
        isHover: false,
        value: '',
        copied: false,
    }
    toggleHover() {
        this.setState({ isHover: !this.state.isHover })
    }
    toggleClick(markdown) {
        // console.log(markdown)
        this.setState({
            value: markdown
        })

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
            <CopyToClipboard text={this.state.value}>
                <div
                    className="card-body text-center overflow-auto"
                    style={{ minHeight: '80px', cursor: 'pointer' }}
                    onMouseEnter={() => this.toggleHover()}
                    onMouseLeave={() => this.toggleHover()}
                    // onClick={() => this.toggleClick(markdown)}
                    onClick={() => this.setState({ value: markdown, copied: true })}
                >

                    {this.state.isHover ?
                        this.state.copied ? <CheckCircleFillIcon /> :
                            <CopyIcon aria-label='Double Click To Copy' />
                        :
                        <ReactMarkdown children={markdown} />
                    }

                </div>

            </CopyToClipboard>

        )
    }
};

export default Badge;
