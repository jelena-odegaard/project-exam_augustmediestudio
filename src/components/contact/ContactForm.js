import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_ugbrfii', 'template_owq8vsy', e.target, 'user_ai6hkisZt1AjI2ZCrRktJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
        <div fluid="true" className=" contact-form-container">
            <form className="form" onSubmit={sendEmail}>
                <div fluid="true" className="row pt-5 mv-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Navn" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Epost" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Din melding" name="message"></textarea>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send melding"></input>
                    </div>
                </div>
            </form>
      </div>
    );
  }