import React, { Component } from 'react';

export default class CalendarBody extends Component {
    render() {
        const { showDialog } = this.props;

        return (
            <div className="calendar__body">
                <div className="calendar__time">
                    <div className="time__part">8:00</div>
                    <div className="time__part">9:00</div>
                    <div className="time__part">10:00</div>
                    <div className="time__part">11:00</div>
                    <div className="time__part">12:00</div>
                    <div className="time__part">13:00</div>
                    <div className="time__part">14:00</div>
                    <div className="time__part">15:00</div>
                    <div className="time__part">16:00</div>
                    <div className="time__part">17:00</div>
                    <div className="time__part">18:00</div>
                    <div className="time__part">19:00</div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="calendar__event" onClick={ showDialog }>Hello World</div>
                    <div className="calendar__event_2" onClick={ showDialog }>Hello World</div>
                </div>
                <div className="calendar__day" >
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
                <div className="calendar__day">
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                    <div className="day__part"></div>
                </div>
            </div>);
    }
}