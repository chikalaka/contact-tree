import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getContactsFromDB} from "./api/data";

class App extends Component {
  render() {
    const contacts = getContactsFromDB;

    return (
      <div className="app-container">
        <h1>Contact Tree</h1>
        The tree...
      </div>
    );
  }
}

export default App;
