import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon, CheckIcon } from '@primer/octicons-react'

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
        
        this.setState({
            value: markdown
        })

    }

    render() {
        const { title, hex } = this.props
        const matchTitle = new RegExp(/\s/g)
        const relpaceTitle = title.replace(matchTitle, '%20')
        const markdown = `![](https://img.shields.io/badge/${relpaceTitle}-${hex}?style=for-the-badge&logo=${relpaceTitle}&logoColor=white)`

        return (
            <CopyToClipboard text={this.state.value}>
                <div
                    className="card-body text-center"
                    style={{ minHeight: '80px', cursor: 'pointer', overflow: 'overlay' }}
                    onMouseEnter={() => this.toggleHover()}
                    onMouseLeave={() => this.toggleHover()}
                    onClick={() => this.setState({ value: markdown, copied: true })}
                >

                    {this.state.isHover
                        ?
                        this.state.copied
                            ?
                            <CheckIcon />
                            :
                            <CopyIcon />
                        :
                        <ReactMarkdown children={markdown} />
                    }

                </div>

            </CopyToClipboard>

        )
    }
};

export default Badge;
