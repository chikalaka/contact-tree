import React, {Component} from 'react';
import Contact from "../Contact/Contact";
import './ContactGroup.css';

export default class ContactGroup extends Component {

  renderContacts() {
    return this.props.contacts.map(contact => {
      return <Contact data={contact} key={contact.id} />
    })
  }

  render() {
    const { shouldRender, contacts, tab } = this.props;
    if (!shouldRender || !contacts || contacts.length === 0) {
      return null;
    }
    const className = tab ? 'tab' : '';
    return (
      <div className={className}>
        {this.renderContacts()}
      </div>
    );
  }
}

