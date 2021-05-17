import React from 'react';
import ContactImage from './img/contact.png';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_id', 'Template_ID', e.target, 'user_id')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
            e.target.reset();
        }
        return (
            <>
            <div className="section" id="contact">
                <center>
                    <h1>
                        <i className="bx bxs-contact"></i>
                        &nbsp;Contact
                        <hr/>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h2>Let’s talk about your project</h2>
                            <img src={ContactImage} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <br/>    
                            <form onSubmit={sendEmail}>                            
                                <input type="text" name="name" placeholder="Name" required/> <br/>
                                <input type="email" name="email" placeholder="Email Address" required/> <br/>
                                <textarea name="message" placeholder="Message" required/> <br/>
                                <input type="submit" value="Send"/> <br/><br/>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
            </>
        )
    }
}

export default Contact;
