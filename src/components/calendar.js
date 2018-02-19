import React, { Component } from 'react';
import './calendar.css'
import CalendarHeader from './calendar_header';

export default class Calendar extends Component {

    render() {
        return (
            <div className="calendar">
                <CalendarHeader />
            </div>
        );
    }
}