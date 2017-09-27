import React, {Component} from 'react';
import ContactGroup from "../ContactGroup/ContactGroup";
import './Contact.css';

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderGroup: false
    }
  }

  onClick = () => {
    this.setState({ renderGroup: !this.state.renderGroup });
  };

  render() {
    const { data: { name, contacts } } = this.props;
    return (
      <div>
        <div onClick={this.onClick} className="contact">
          {name}
        </div>
        <ContactGroup
          tab={true}
          contacts={contacts}
          shouldRender={this.state.renderGroup}
        />
      </div>
    );
  }
}