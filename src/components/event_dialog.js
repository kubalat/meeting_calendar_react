import React, { Component } from 'react';

export default class EventDialog extends Component {
    render() {
        if (this.props.isOpen === false) {
            return null;
        }

        const dialogStyle = {
            top: this.props.positionY,
            left: this.props.positionX
        }

        return (<div className="event__dialog" style={ dialogStyle }>Test</div>);
    }
}