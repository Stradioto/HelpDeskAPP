import React, { Component } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class SupportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      workplace: '',
      natureOfContact: '',
      severity: '',
      description: '',
      successMessage: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'supportRequests'), {
        name: this.state.name,
        workplace: this.state.workplace,
        natureOfContact: this.state.natureOfContact,
        severity: this.state.severity,
        description: this.state.description
      });
      // Clear the form fields and display the success message
      this.setState({
        name: '',
        workplace: '',
        natureOfContact: '',
        severity: '',
        description: '',
        successMessage: 'Information sent successfully!'
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'black',
        fontSize: '32px',
        width: '100%',
        height: '100%',
        overflow: 'auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: 'black',
          fontSize: '23px'
        }}>Fill in query</h2>
        <form onSubmit={this.handleSubmit} id='fields' style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <input
            name="name"
            placeholder='Email'
            style={{ width: '40%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box' }}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="workplace"
            placeholder='Workplace'
            style={{ width: '40%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box' }}
            value={this.state.workplace}
            onChange={this.handleChange}
          />
          <select
            name="natureOfContact"
            style={{ width: '40%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box' }}
            value={this.state.natureOfContact}
            onChange={this.handleChange}
          >
            <option value="" disabled hidden>Nature of contact</option>
            <option value="technicalproblem">Technical Problem</option>
            <option value="workroutine">Work routine</option>
            <option value="orientation">Orientation</option>
          </select>
          <select
            name="severity"
            style={{ width: '40%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box' }}
            value={this.state.severity}
            onChange={this.handleChange}
          >
            <option value="" disabled hidden>Severity</option>
            <option value="cantwork">Can´t work</option>
            <option value="workdelay">Work delay</option>
            <option value="minorfix">Minor fix</option>
          </select>
          <textarea
            name="description"
            style={{ width: '40%', padding: '12px 20px', margin: '8px 0', boxSizing: 'border-box' }}
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div id="buttons" style={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: '20px',
            padding: '12px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button type="submit" style={{
              backgroundColor: 'orange',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '5px',
              outline: 0,
              border: 0,
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0px 2px 2px lightgray',
              transition: 'background-color 250ms ease'
            }}>Submit
            </button>
          </div>
        </form>
        {this.state.successMessage && (
          <p style={{ color: 'green', textAlign: 'center' }}>{this.state.successMessage}</p>
        )}
      </div>
    );
  }
}

export default SupportForm;