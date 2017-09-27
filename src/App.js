import React, { Component } from 'react';
import './App.css';
import {getContactsFromDB} from "./api/data";
import ContactGroup from "./components/ContactGroup/ContactGroup";

class App extends Component {
  render() {
    const contacts = getContactsFromDB;

    return (
      <div className="app-container">
        <h1>Contact Tree</h1>
        <ContactGroup
          tab={false}
          contacts={contacts}
          shouldRender={true}
        />
      </div>
    );
  }
}

export default App;
