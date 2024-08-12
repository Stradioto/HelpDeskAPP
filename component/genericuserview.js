import React, { Component } from 'react';
import SupportForm from './supportForm';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFAQ: true, 
      showSupportForm: false, 
      showOpenedTickets: false,
      tickets: [], // Hold the fetched tickets
      name: '',
      position: '',
      employeenumber: '',
      userInfoLoaded: false,
      userInfo: null
    };
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const userInfoRef = collection(db, 'userInfo');
      const q = query(userInfoRef, where('email', '==', user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userInfo = querySnapshot.docs[0].data();
        this.setState({
          userInfoLoaded: true,
          userInfo: userInfo,
          name: userInfo.name,
          position: userInfo.position,
          employeenumber: userInfo.employeenumber
        });
      }
    }
  }

  handleFAQButtonClick = () => {
    this.setState({
      showFAQ: true,
      showSupportForm: false,
      showOpenedTickets: false
    });
  }

  handleSupportFormButtonClick = () => {
    this.setState({
      showFAQ: false, 
      showSupportForm: true,
      showOpenedTickets: false
    });
  }

  handleOpenedTicketsButtonClick = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const ticketsRef = collection(db, 'supportRequests');
      const q = query(ticketsRef, where('name', '==', user.email));
      const querySnapshot = await getDocs(q);
      const tickets = querySnapshot.docs.map(doc => doc.data());

      this.setState({
        showFAQ: false,
        showSupportForm: false,
        showOpenedTickets: true,
        tickets: tickets 
      });
    }
  }

  handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFillInfo = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const userData = {
        email: user.email,
        name: this.state.name,
        position: this.state.position,
        employeenumber: this.state.employeenumber
      };
      try {
        await addDoc(collection(db, 'userInfo'), userData);
        console.log('User info added successfully');
        this.setState({
          userInfoLoaded: true,
          userInfo: userData
        });
      } catch (error) {
        console.error('Error adding user info:', error);
      }
    }
  }

  render() {
    const { userInfoLoaded, userInfo } = this.state;
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
          <button onClick={this.handleFAQButtonClick}>FAQ</button>
          <button onClick={this.handleSupportFormButtonClick}>Open Support Ticket</button>
          <button onClick={this.handleOpenedTicketsButtonClick}>Opened Tickets</button>
          
          <div> [log-in information]<br/>
            {userInfoLoaded && userInfo ? (
              <div>
                <p><strong>Name:</strong> {userInfo.name}</p>
                <p><strong>Position:</strong> {userInfo.position}</p>
                <p><strong>Employee Number:</strong> {userInfo.employeenumber}</p>
              </div>
            ) : (
              <div style={{width: '80%',
                border: '2px solid',
                margin: '20px'}}>
                Name: <input
                        name="name"
                        placeholder='Name'
                        style={{ width: '71%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box', marginLeft: '12px' }}
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                <br/>Position: <input
                        name="position"
                        placeholder='Position'
                        style={{ width: '70%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box' }}
                        value={this.state.position}
                        onChange={this.handleChange}
                      /> 
                <br/>Number: <input
                        name="employeenumber"
                        placeholder='Employee Number'
                        style={{ width: '70%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box' }}
                        value={this.state.employeenumber}
                        onChange={this.handleChange}
                      />
                      <br></br>
                <button onClick={this.handleFillInfo}>Fill info and click here to save</button>
              </div>
              
            )}
            <p>Emergency Support:<br/>555-555-55</p>
          </div>
          
          
          
          <button onClick={this.handleLogout}>Logout</button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          width: '80%',
        }}>
          {this.state.showFAQ && (
            <p>
              Frequently Asked Questions (FAQ) - IT Support

              Welcome to the IT Support FAQ section!<br/> Here you'll find answers to common questions regarding IT services within our company.<br/>

              <br/>1. How do I request IT support?<br/>
            If you encounter any technical issues or require assistance, simply submit a ticket through our IT helpdesk system. You can access the helpdesk via the company's intranet or by emailing us.<br/><br/>

            2. What information should I include in my support request?<br/>
            When submitting a support ticket, please provide detailed information about the issue you're experiencing. Include any error messages, screenshots (if applicable), and steps you've already taken to resolve the problem. This helps us diagnose and address the issue more efficiently.<br/><br/>

            3. What are the typical response times for IT support requests?<br/>
            Our IT team aims to respond to support tickets within [response time], depending on the priority level of the issue. Priority levels are determined based on the impact of the issue on your work and the urgency of the resolution.<br/><br/>

            4. How can I reset my password?<br/>
            To reset your password, please visit the self-service password reset portal [link] and follow the instructions provided. If you encounter any difficulties, contact IT support for further assistance.<br/><br/>

            5. Can I access company resources remotely?<br/>
            Yes, our company provides remote access solutions for employees. Please refer to the remote access guidelines on the company intranet for instructions on how to connect securely to company resources from outside the office network.<br/><br/>

            6. How do I set up my company email on my mobile device?<br/>
            To set up your company email on your mobile device, please follow the email configuration instructions provided in the IT knowledge base. If you need additional assistance, contact IT support for guidance.<br/><br/>

            7. What cybersecurity measures are in place to protect company data?<br/>
            We take cybersecurity seriously and have implemented various measures to safeguard company data, including firewalls, antivirus software, encryption, and employee training programs. If you have specific questions or concerns about cybersecurity, please reach out to our IT security team.<br/><br/>

            8. How often should I update my software and applications?<br/>
            Regular software and application updates are essential for maintaining security and performance. We recommend enabling automatic updates whenever possible and installing updates as soon as they become available.<br/><br/>

            9. What should I do if I suspect a security breach or encounter suspicious activity?<br/>
            If you suspect a security breach or encounter any suspicious activity, report it immediately to our IT security team. Do not attempt to investigate or resolve the issue on your own, as this could potentially exacerbate the situation.<br/><br/>

            10. Where can I find training resources for IT tools and software used in the company?<br/>
            Training resources and documentation for IT tools and software are available on the company intranet or through the IT knowledge base. Additionally, you can contact IT support for personalized training or assistance with specific tools or software.<br/><br/>

            If you have any further questions or require assistance not covered in this FAQ, please don't hesitate to contact our IT support team at [IT support contact information]. We're here to help!<br/>
            </p>
          )}

          {this.state.showSupportForm && <SupportForm />}
          
          {this.state.showOpenedTickets && (
            <div>
              <h2>Opened Tickets</h2>
              {this.state.tickets.length > 0 ? (
                <div>
                  {this.state.tickets.map((ticket, index) => (
                    <div key={index} style={{
                      border: '1px solid gray',
                      borderRadius: '5px',
                      padding: '10px',
                      margin: '10px 0',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      <p><strong>Email:</strong> {ticket.name}</p>
                      <p><strong>Workplace:</strong> {ticket.workplace}</p>
                      <p><strong>Nature of Contact:</strong> {ticket.natureOfContact}</p>
                      <p><strong>Severity:</strong> {ticket.severity}</p>
                      <p><strong>Description:</strong> {ticket.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No opened tickets found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserView;