import React, { Component } from 'react';

export default class CalendarHeader extends Component {
    render() {
        return (
            <div className="calendar__head">
                <div className="calendar__time"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
                <div className="calendar__day"></div>
            </div>);
    }
}