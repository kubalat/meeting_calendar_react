import React, { Component } from 'react';

export default class EventDialog extends Component {
    render() {
        if (this.props.isOpen === false) {
            return null;
        }

        const { closeDialogRequest } = this.props
        //This do same
        //const closeDialogRequest = this.props.closeDialogRequest;

        const dialogStyle = {
            top: this.props.positionY,
            left: this.props.positionX
        }

        return (
            <div className="event__dialog" style={ dialogStyle }>
                <header>
                    <h3>Event name</h3>
                </header>
                <div class="event__body">
                    <div className="event__metadata" id="event__time">
                        <div className="meta__icon"><i class="far fa-clock"></i></div>
                        <div className="meta__value">8:00 - 9:00</div>
                    </div>
                    <div className="event__metadata" id="event__user">
                        <div className="meta__icon"><i class="far fa-user"></i></div>
                        <div className="meta__value">Tomáš Kubala</div>
                    </div>
                    <div className="event__metadata" id="event__note">
                        <div className="meta__icon"><i class="far fa-sticky-note"></i></div>
                        <div className="meta__value">This is a very big note. Olalalalalalalalala</div>
                    </div>
                    <button type="button" className="closeBtn" onClick={ closeDialogRequest }>Close</button>
                </div>
            </div>
        );
    }
}