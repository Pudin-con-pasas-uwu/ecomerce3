import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
   

    //const form = useRef();
    const [form, setForm] = useState ({
        user_name:'',
        user_email:'',
        message:''
    }); useRef();
    
    
    const handleChange = (e) => {
        const {value,name} = e.target
        setForm ({
            ...form, [name]: value
            
        })
    };


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uki5kuo', 'template_1cka8nj', form.current, 'mDNvQFAmlXDOGWJns')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        alert("Email enviado:)");
        e.target.reset();
    };
    
    return (
        <div>
            <form action="" ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <div className="row testing">
                        <div className="col-sm-3">
                            <label  className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" placeholder="Ejemplo: Edgar Perez Santiz" name='user_name' value={form.user_name} onChange={handleChange} required/>
                                
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" placeholder="Ejemplo@gmail.com" name='user_email' value={form.user_email} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="container test2">
                        <div className="row">
                            <div className="col-sm-3">
                                <label  className="form-label ">Mensaje</label>
                                    <textarea className="form-control altura" placeholder='Escribenos tus dudas/sugerencias' name='message' value={form.message} onChange={handleChange} required></textarea>
                            </div>
                        </div>

                    </div>
                        <div className="container boton_mandar">
                            <button className="btn" type='submit' id='mandar'>Enviar</button>
                            
                        </div>
                </div>
            </form>
        </div>
        
    );
}

export default ContactForm;
