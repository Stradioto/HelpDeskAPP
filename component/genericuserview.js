import React, { Component } from 'react';
import SupportForm from './supportForm'; // Import the component you want to load

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFAQ: true, // Initially, the FAQ text is hidden
      showSupportForm: false, // Initially, the support form is hidden
      showOpenedTickets: false
    };
  }

  handleFAQButtonClick = () => {
    this.setState({
      showFAQ: true,
      showSupportForm: false, // Hide the support form when FAQ button is clicked
      showOpenedTickets: false
    });
  }

  handleSupportFormButtonClick = () => {
    this.setState({
      showFAQ: false, // Hide the FAQ text when support form button is clicked
      showSupportForm: true,
      showOpenedTickets: false
    });

    
  }

  handleOpenedTicketsButtonClick = () => {
    this.setState({
      showFAQ: false, // Hide the FAQ text when support form button is clicked
      showSupportForm: false,
      showOpenedTickets: true
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
          <button onClick={this.handleFAQButtonClick}>FAQ</button>
          <button onClick={this.handleSupportFormButtonClick}>Open Support Ticket</button>
          <button onClick={this.handleOpenedTicketsButtonClick}>Opened Tickets</button>
          <p> [log-in information]<br/>Name<br/>Position<br/>Employee number </p>
          <p>Emergency Support:<br/>555-555-55</p>
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
          
          {this.state.showOpenedTickets && (<p>Opened tickets should appear here</p>)}
        </div>
      </div>
    );
  }
}

export default UserView;