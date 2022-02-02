import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon, CheckIcon } from '@primer/octicons-react'

class CopyHex extends Component {

    state = {
        isHover: false,
        value: '',
        copied: false,
    }
    toggleHover() {
        this.setState({ isHover: !this.state.isHover })
    }
    toggleClick(hex) {
        this.setState({
            value: hex
        })

    }

    render() {
        const { hex } = this.props

        return (
            <CopyToClipboard text={this.state.value}>
                <div
                    onMouseEnter={() => this.toggleHover()}
                    onMouseLeave={() => this.toggleHover()}
                    onClick={() => this.setState({ value: `#${hex}`, copied: true })}
                >

                    {this.state.isHover
                        ?
                        this.state.copied
                            ?
                            <CheckIcon />
                            :
                            <CopyIcon />
                        :
                        <ReactMarkdown children={`#${hex}`} />
                    }

                </div>

            </CopyToClipboard>
        )
    }
}

export default CopyHex;

