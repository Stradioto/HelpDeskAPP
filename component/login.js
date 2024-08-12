import React, { Component } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';

//reset password is not functional(Only kept for ilustrate design)
//Google login removed(Only enabled on firebase)

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Exception for testing purposes
      const emailVerifiedExceptions = ['test@any.com', 'test@it.com'];
      if (emailVerifiedExceptions.includes(email)) {
        user.emailVerified = true; // Simulate email verification
      }

      if (user.emailVerified) {
        console.log('Logged in');
      } else {
        this.setState({ error: 'Please verify your email before logging in.' });
        await signOut(auth);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      this.setState({ error: error.message });
    }
  }

  handleRegister = async () => {
    const { email, password } = this.state;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registered successfully');

      
      await sendEmailVerification(userCredential.user);
      console.log('Verification email sent');

      
      await signOut(auth);

      this.setState({ error: 'Registration successful! A verification email has been sent. Please verify your email before logging in.' });

    } catch (error) {
      console.error('Error registering:', error);
      this.setState({ error: error.message });
    }
  }

  render() {
    const { email, password, error } = this.state;

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
        }}>Enter credentials</h2>
        <div id='fields' style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            style={{
              width: '40%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
            }}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            style={{
              width: '40%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
            }}
            placeholder="Password"
          />
        </div>
        <div id="buttons" style={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: '20px',
          padding: '12px 20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button
            onClick={this.handleLogin}
            style={{
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
            }}
          >
            Login
          </button>
          <button
            onClick={this.handleRegister}
            style={{
              color: 'white',
              backgroundColor: 'orange',
              padding: '5px 15px',
              borderRadius: '5px',
              outline: 0,
              border: 0,
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0px 2px 2px lightgray',
              transition: 'background-color 250ms ease'
            }}
          >
            Register
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '15px' }}> 
          <a
            href="#"
            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Forgot Password? Reset here. 
          </a>
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </div>
    );
  }
}

export default LoginComponent;