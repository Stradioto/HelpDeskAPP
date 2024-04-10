import React, { Component } from 'react';


class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //showGreeting: true,
      //showOpenedSupportTickets: false,
    };
  }

  handleHomeButtonClick = () => {
    this.setState({
      //showGreeting: true,
      //showOpenedSupportTickets: false,
    });
  }


  render() {
    return (
      <div style={{display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      //height: '100vh',
      color: 'black',
      fontSize: '32px',
      //gap: '5vh',
      //margin: 'auto'
      width: '100%',
      height: '100%',
      overflow: 'auto'}}>
      </div>
    );
  }
}

export default ChatComponent;