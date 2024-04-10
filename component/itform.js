import React, { Component } from 'react';

class ITForm extends React.Component {
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
                                          <option value="technicalproblem">Technical Problem</option>
                                          <option value="workroutine">Work routine</option>
                                          <option value="orientation">Orientation</option>
                                          <option selected value='"" selected disabled hidden'>Fetch in backend</option>
                            </select>
                            <button style={{
                                      backgroundColor: 'orange',
                                      color: 'white',
                                      padding: '5px 15px',
                                      borderRadius: '5px',
                                      outline: 0,
                                      border: 0,
                                      textTransform: 'uppercase',
                                      cursor: 'pointer',
                                      boxShadow: '0px 2px 2px lightgray',
                                      transition: 'background-color 250ms ease'}}>Change
                            </button>
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
                                          <option value="cantwork">Can´t work</option>
                                          <option value="workdelay">Work delay</option>
                                          <option value="minorfix">Minor fix</option>
                                          <option selected value='"" selected disabled hidden'>Fetch in backend</option>
                            </select>
                            <button style={{
                                      backgroundColor: 'orange',
                                      color: 'white',
                                      padding: '5px 15px',
                                      borderRadius: '5px',
                                      outline: 0,
                                      border: 0,
                                      textTransform: 'uppercase',
                                      cursor: 'pointer',
                                      boxShadow: '0px 2px 2px lightgray',
                                      transition: 'background-color 250ms ease'}}>Change
                            </button>
                            </div>
                            <textarea></textarea>
                            <button style={{
                                      backgroundColor: 'orange',
                                      color: 'white',
                                      padding: '5px 15px',
                                      borderRadius: '5px',
                                      outline: 0,
                                      border: 0,
                                      textTransform: 'uppercase',
                                      cursor: 'pointer',
                                      boxShadow: '0px 2px 2px lightgray',
                                      transition: 'background-color 250ms ease'}}>Chat
                            </button>
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

export default ITForm; // Don’t forget to use export default!