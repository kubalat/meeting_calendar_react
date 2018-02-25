import React, { Component } from 'react';
import './calendar.css'
import CalendarBody from './calendar_body';
import CalendarHeader from './calendar_header'
import EventDialog from './event_dialog'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false, positionX: 0, positionY: 0}
      }

    render() {
        return (
            <div className="calendar">
                {/* <button type="button" onClick={ this.showDialog }>Open</button> */}
                <CalendarHeader />
                <CalendarBody showDialog={ this.showDialog }/>
                <EventDialog closeDialogRequest={ this.hideDialog } isOpen={ this.state.isModalOpen } positionX={ this.state.positionX } positionY={ this.state.positionY } />
            </div>
            
        );
    }

    showDialog = (e) => {
        // this.setState({ isModalOpen: !this.state.isModalOpen, positionX: e.clientX, positionY: e.clientY });
        this.setState({ isModalOpen: true, positionX: e.clientX, positionY: e.clientY });
    }

    hideDialog = () => {
        this.setState({ isModalOpen: false});
    }
}