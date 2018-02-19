import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <i className="fas fa-calendar-alt"></i><h1>Meeting Calendar</h1>
                </div>
                <div className="header__right">
                    <div className="no-user">Not logged user</div>
                    <i class="fas fa-user-circle"></i>
                </div>
            
            </div>
        )
        
    }
}
