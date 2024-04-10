import React, { Component } from 'react';

class SupportForm extends React.Component {
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
                          fontSize: '23px'
                          }}>Fill in query</h2>
                  <div id='fields' style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          //height: '10vh'
                                          }}>
                          <input placeholder='Name' style={{width: '40%',
  
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         }}/>
                          <input placeholder='Workplace' style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         
                                         }} />
                            <select style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         
                                         }}> 
                                          <option value="technicalproblem">Technical Problem</option>
                                          <option value="workroutine">Work routine</option>
                                          <option value="orientation">Orientation</option>
                                          <option selected value='"" selected disabled hidden'>Nature of contact</option>
                            </select>
                            <select style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         }}> 
                                          <option value="cantwork">Can´t work</option>
                                          <option value="workdelay">Work delay</option>
                                          <option value="minorfix">Minor fix</option>
                                          <option selected value='"" selected disabled hidden'>Severity</option>
                            </select>
                            <textarea style={{width: '40%',
                                         padding: '12px 20px',
                                         margin: '8px 0',
                                         boxSizing: 'border-box',
                                         
                                         }} />
                  </div>
                  <div id="buttons" style={{
                                         display: 'inline-flex',
                                         flexDirection: 'row',
                                         gap: '20px',
                                         padding: '12px 20px',
                                         justifyContent: 'center',
                                          alignItems: 'center',
                                         }}> 
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
                                      transition: 'background-color 250ms ease'}}>Submit
                      </button>
                
                  </div>
             </div>;
    }
  }

export default SupportForm; // Don’t forget to use export default!