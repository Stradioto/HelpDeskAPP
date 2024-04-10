import React, { Component } from 'react';

class LoginComponent extends React.Component {
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
                        }}>Enter credentials</h2>
                <div id='fields' style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        //height: '10vh'
                                        }}>
                        <input style={{width: '40%',

                                       padding: '12px 20px',
                                       margin: '8px 0',
                                       boxSizing: 'border-box',
                                       }}/>
                        <input style={{width: '40%',
                                       padding: '12px 20px',
                                       margin: '8px 0',
                                       boxSizing: 'border-box',
                                       
                                       }} type='password'/>
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
                                    transition: 'background-color 250ms ease'}}>Login
                    </button>
                    <button style={{
                                    color: 'white',
                                    backgroundColor: 'orange',
                                    padding: '5px 15px',
                                    borderRadius: '5px',
                                    outline: 0,
                                    border: 0,
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    boxShadow: '0px 2px 2px lightgray',
                                    transition: 'background-color 250ms ease'}}>Register
                    </button>
                </div>
           </div>;
  }
}

export default LoginComponent; // Don’t forget to use export default!