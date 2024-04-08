import React, { Component } from 'react';

class HeadPage extends React.Component {
  render() {
    return <div style={{
                      display: 'inline-flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignContent: 'flex-start',
                      backgroundColor: 'orange',
                      width: '100%'
                      }}> 
              <h1 style={{
                      color: 'black',
                      paddingLeft: '10px'
                      }}>HjälpaLätt</h1>     
           </div >;
  }
}

export default HeadPage; // Don’t forget to use export default!

