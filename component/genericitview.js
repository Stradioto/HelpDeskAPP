import React, { Component } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc, setDoc, query, where, addDoc } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';

class ItView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGreeting: true,
      showOpenedSupportTickets: false,
      showSolvedTickets: false,
      showITForm: false,
      supportTickets: [],
      solvedTickets: [],
      userInfoLoaded: false,
      userInfo: null,
      name: '',
      position: '',
      employeenumber: ''
    };
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
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

  handleHomeButtonClick = () => {
    this.setState({
      showGreeting: true,
      showOpenedSupportTickets: false,
      showSolvedTickets: false,
      showITForm: false
    });
  }

  handleSolvedTicketsButtonClick = async () => {
    this.setState({
      showGreeting: false,
      showOpenedSupportTickets: false,
      showSolvedTickets: true,
      showITForm: true
    });
    await this.fetchSolvedTickets();
  }

  handleOpenedTicketsButtonClick = async () => {
    this.setState({
      showGreeting: false,
      showOpenedSupportTickets: true,
      showSolvedTickets: false,
      showITForm: true
    });
    await this.fetchSupportTickets();
  }

  fetchSupportTickets = async () => {
    const querySnapshot = await getDocs(collection(db, "supportRequests"));
    const tickets = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    this.setState({ supportTickets: tickets });
  }

  fetchSolvedTickets = async () => {
    const querySnapshot = await getDocs(collection(db, "solvedRequests"));
    const tickets = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    this.setState({ solvedTickets: tickets });
  }

  handleOpenChatClick = (ticketId) => {
    // Implement logic to open chat for ticket with id: ticketId
    console.log(`Opening chat for ticket with ID: ${ticketId}`);
  }

  handleResolvedClick = async (ticketId) => {
    const resolvedTicket = this.state.supportTickets.find(ticket => ticket.id === ticketId);

    // Copy the ticket to a new collection in Firestore
    try {
      await setDoc(doc(db, "solvedRequests", ticketId), resolvedTicket);
      console.log(`Ticket with ID ${ticketId} copied to solvedRequests collection in Firestore`);
    } catch (error) {
      console.error("Error copying document:", error);
      return; 
    }

    // Update solvedTickets with resolvedTicket
    this.setState(prevState => ({
      supportTickets: prevState.supportTickets.filter(ticket => ticket.id !== ticketId),
      solvedTickets: [...prevState.solvedTickets, resolvedTicket]
    }));

    // Delete the ticket from Firestore
    try {
      await deleteDoc(doc(db, "supportRequests", ticketId));
      console.log(`Ticket with ID ${ticketId} deleted from Firestore`);
    } catch (error) {
      console.error("Error deleting document:", error);
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
        overflow: 'auto',
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
          
          <p> [log-in information]<br/>
            {userInfoLoaded && userInfo ? (
              <div>
                <p><strong>Name:</strong> {userInfo.name}</p>
                <p><strong>Position:</strong> {userInfo.position}</p>
                <p><strong>Employee Number:</strong> {userInfo.employeenumber}</p>
              </div>
            ) : (
              <div>
                Name: <input
                        name="name"
                        placeholder='Name'
                        style={{ width: '40%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box', marginLeft: '12px' }}
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                <br/>Position: <input
                        name="position"
                        placeholder='Position'
                        style={{ width: '40%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box' }}
                        value={this.state.position}
                        onChange={this.handleChange}
                      /> 
                <br/>Number: <input
                        name="employeenumber"
                        placeholder='Employee Number'
                        style={{ width: '40%', height: '20%', padding: '12px 20px', 
                        margin: '8px 0', boxSizing: 'border-box' }}
                        value={this.state.employeenumber}
                        onChange={this.handleChange}
                      />
                <button onClick={this.handleFillInfo}>Fill info</button>
              </div>
            )}
          </p>

          <p>Emergency Support:<br/>555-555-55</p>

          <button onClick={this.handleLogout}>Logout</button>
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

          {this.state.showOpenedSupportTickets && (
            <div>
              <h2>Opened Support Tickets</h2>
              {this.state.supportTickets.length > 0 ? (
                <div>
                  {this.state.supportTickets.map(ticket => (
                    <div key={ticket.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
                      <p><strong>Email:</strong> {ticket.name}</p>
                      <p><strong>Workplace:</strong> {ticket.workplace}</p>
                      <p><strong>Nature of Contact:</strong> {ticket.natureOfContact}</p>
                      <p><strong>Severity:</strong> {ticket.severity}</p>
                      <p><strong>Description:</strong> {ticket.description}</p>
                      <div style={{ marginTop: '10px' }}>
                        <button onClick={() => this.handleOpenChatClick(ticket.id)}>Open Chat</button>
                        <button onClick={() => this.handleResolvedClick(ticket.id)}>Resolved</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No open tickets found.</p>
              )}
            </div>
          )}

          {this.state.showSolvedTickets && (
            <div>
              <h2>Solved Support Tickets</h2>
              {this.state.solvedTickets.length > 0 ? (
                <div>
                  {this.state.solvedTickets.map(ticket => (
                    <div key={ticket.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
                      <p><strong>Email:</strong> {ticket.name}</p>
                      <p><strong>Workplace:</strong> {ticket.workplace}</p>
                      <p><strong>Nature of Contact:</strong> {ticket.natureOfContact}</p>
                      <p><strong>Severity:</strong> {ticket.severity}</p>
                      <p><strong>Description:</strong> {ticket.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No solved tickets found.</p>
              )}
            </div>
          )}
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          width: '50%',
        }}>
          {/*this.state.showITForm && <FinishedTickets/>*/}
        </div>
      </div>
    );
  }
}

export default ItView;