import React, { Component } from 'react';
import ITForm from './itform';

class ItView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGreeting: true,
      showOpenedSupportTickets: false,
      showSolvedTickets: false,
      showITForm: false
    };
  }

  handleHomeButtonClick = () => {
    this.setState({
      showGreeting: true,
      showOpenedSupportTickets: false,
      showSolvedTickets: false,
      showITForm: false
    });
  }

  handleSolvedTicketsButtonClick = () => {
    this.setState({
      showGreeting: false,
      showOpenedSupportTickets: false,
      showSolvedTickets: true,
      showITForm: true
    });
  }

  handleOpenedTicketsButtonClick = () => {
    this.setState({
      showGreeting: false,
      showOpenedSupportTickets: true,
      showSolvedTickets: false,
      showITForm: true
    });
  }

  render() {
    return (
      <div style={{
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        width: '100%',
        height: '100%',
        overflow: 'auto', // Adding overflow property for scrolling
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          backgroundColor: 'lightgray',
          width: '20%',
        }}>
          <button onClick={this.handleHomeButtonClick}>Home</button>
          <button onClick={this.handleOpenedTicketsButtonClick}>Opened Tickets</button>
          <button onClick={this.handleSolvedTicketsButtonClick}>Solved Tickets</button>
          <p> [log-in information]<br/>Name<br/>Position<br/>Employee number </p>
          <p>Emergency Support:<br/>555-555-55</p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          width: '30%',
        }}>
          {this.state.showGreeting && (
            <p>
              Welcome to the support personnel portal!<br/>
              Here you can visualize the open tickets.<br/>
            </p>
          )}

          {this.state.showOpenedSupportTickets && (<p>Opened support tickets should appear here</p>)}

          {this.state.showSolvedTickets && (<p>Solved support tickets should appear here</p>)}
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          width: '50%',
        }}>
          {this.state.showITForm && <ITForm/>}
        </div>
      </div>
    );
  }
}

export default ItView;