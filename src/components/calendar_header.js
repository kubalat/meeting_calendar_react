import React, { Component } from 'react';

export default class CalendarHeader extends Component {
    render() {
        return (
            <div className="calendar__header">
                <div className="header__time"></div>
                <div className="header__day" id="day__monday">1.<br/>Monday</div>
                <div className="header__day" id="day__tuesday">2.<br/>Tuesday</div>
                <div className="header__day" id="day__wednesday">3.<br/>Wednesday</div>
                <div className="header__day" id="day__thursday">4.<br/>Thursday</div>
                <div className="header__day" id="day__friday">5.<br/>Friday</div>
                <div className="header__day" id="day__saturday">6.<br/>Saturday</div>
                <div className="header__day" id="day__sunday">7.<br/>Sunday</div>
            </div>
        );
    }
}