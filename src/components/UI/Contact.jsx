import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f6rkp4g', 'template_8udhpnl', form.current, 'ZTzfeikixhW3cxZ1c')
          .then((result) => {
              console.log(result.text);
          },(error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
       <section id="contact">
                  <div className="container">
                   <article className="w-full mt-4 tab:mt-0 tab:w-1/2 lg:flex items-center bg-primLight dark:bg-primDark px-4
                    lg:px-8 py-8 rounded border border-solid shadow-xl shadow-primDark dark:shadow-primLight
                    border-textLight dark:border-textDark">
                        <form ref={form} onSubmit={sendEmail} className="w-full">
                            <div className="mb-5">
                                <input type="text" placeholder="entrer votre nom" name="user_name" className="w-full p-3 focus:outline-none rounded-md border border-solid 
                    border-textLight dark:border-textDark" required/>
                            </div>
                            <div className="mb-5">
                                <input type="email" placeholder="entrer votre email" name="user_email" className="w-full p-3 focus:outline-none rounded-md border border-solid 
                    border-textLight dark:border-textDark" required/>
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder="Sujet" name="subject" className="w-full p-3 focus:outline-none rounded-md border border-solid 
                    border-textLight dark:border-textDark" required/>
                            </div>
                            <div className="mb-5">
                                <textarea type="text" rows={3} placeholder="Ecrirer votre message" name="message" className="w-full p-3 focus:outline-none rounded-md border border-solid 
                    border-textLight dark:border-textDark" required/>
                            </div>

                            <button type="submit" className="w-full p-3 focus:outline-none rounded-md text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4  max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark  text-center ease-linear duration-150">
                                Envoyer le message</button>
                        </form>
                    </article> 
                  </div>
       </section>
    )
}
export default Contact;
