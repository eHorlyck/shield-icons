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
            
        )
    }
}

export default CopyHex;
