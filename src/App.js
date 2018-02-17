import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Calendar from './components/calendar';
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Calendar />
        <Footer />
      </div>
    );
  }
}

