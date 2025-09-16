import React from 'react'
import emailjs, { send } from 'emailjs-com';
import '../components/FormStyles.css'
import { useRef } from 'react';

const Form = () => {

  const contact = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shbb3lr",
        "template_r97ibpg",
        contact.current,
        "h61bVvdMWGjWBAxJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='form' >
        <form ref={contact} style={{margin:" 0 auto"}} onSubmit={sendEmail}>
          <h3>Contact us</h3>Reach out to us for any inquiry
            {/* <label htmlFor="name">Your Name</label> */}
            <input type="text" placeholder='Your Name' name='user_name' />
            {/* <label htmlFor="email">E-mail</label> */}
            <input type="email" placeholder='E-mail' name='user_email' />
            {/* <label htmlFor="Subject">Subject</label> */}
            <input type="text" placeholder='Subject' name='from_name'/>
            {/* <label htmlFor="Details">Details</label> */}
            <textarea rows="6" placeholder='Message' name='message'/>
            
            <button className="btn-1" type='submit' value={send}>Submit</button>        
        </form> 
      
    </div>
  )
}

export default Form
