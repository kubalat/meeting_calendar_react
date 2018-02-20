import React, { Component } from 'react';
import './calendar.css'
import CalendarBody from './calendar_body';
import CalendarHeader from './calendar_header'
import EventDialog from './event_dialog'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false, positionX: 0, positionY: 0 }
      }

    render() {
        return (
            <div className="calendar" onClick={ (e) => this.toggleModal(e) }>
                <CalendarHeader />
                <CalendarBody />
                <EventDialog isOpen={ this.state.isModalOpen } positionX={ this.state.positionX } positionY={ this.state.positionY } />
            </div>
        );
    }

    toggleModal(e) {
        console.log(e.clientX);
        this.setState({ isModalOpen: !this.state.isModalOpen, positionX: e.clientX, positionY: e.clientY });
    }
}