import React, { Component } from 'react';

class FinishedTickets extends React.Component {
    render() {
      return <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          //height: '100vh',
                          color: 'black',
                          fontSize: '32px',
                          //gap: '5vh',
                          //margin: 'auto'
                          width: '100%',
                          height: '100%',
                          overflow: 'auto'
                        }}>  
                  <h2 style={{
                          //height: '10vh',
                          textAlign: 'center',
                          color: 'black',
                          fontSize: '18px'
                          }}>Ticket information</h2>
                  <div id='fields' style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          //height: '10vh'
                                          }}>
                          <input value='Fetch in backend' style={{width: '40%',
  
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         }}/>
                          <input value='Fetch in backend' style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         
                                         }} />
                            <div style={{
                                         display: 'inline-flex',
                                         flexDirection: 'row',gap: '10px',
                                         //padding: '4px 6px',
                                         justifyContent: 'center',
                                          alignItems: 'center',}}>
                            <select style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         
                                         }}> 
                                          <option selected value='"" selected disabled hidden'>Fetch in backend</option>
                            </select>

                            </div>
                            <div style={{
                                         display: 'inline-flex',
                                         flexDirection: 'row',gap: '10px',
                                         //padding: '4px 6px',
                                         justifyContent: 'center',
                                          alignItems: 'center',}}>
                            <select style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         }}> 
                                          <option selected value='"" selected disabled hidden'>Fetch in backend</option>
                            </select>

                            </div>
                            <textarea></textarea>

                  </div>
                  {/*<div id="buttons" style={{
                                         display: 'inline-flex',
                                         flexDirection: 'row',
                                         gap: '20px',
                                         padding: '12px 20px',
                                         justifyContent: 'center',
                                          alignItems: 'center',
                                         }}> 
                      
                
                  </div>*/}
             </div>;
    }
  }

export default FinishedTickets; // Don’t forget to use export default!