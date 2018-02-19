import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                Powered by React. Created by <a href="https://tomaskubala.sk">Tomáš Kubala</a>. Repository on <a href="https://github.com/kubalat/meeting_calendar_react">GitHub</a>.
            </div>
        );
    }
}