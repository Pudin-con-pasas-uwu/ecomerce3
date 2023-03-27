import React from 'react';


const Telefonos = () => {

    return (
        <div>
            <div className="container" id='telefonos_contenedor'>
                <div className="row" id='contactos'>
                    <div className="col-sm-2">
                       <p className='centrar'>Soporte</p>
                       <p className='number'>+51 9995647383</p>
                       <p className='horario'>Lunes-Sabado, 9:00 am-5:00 pm </p>
                    </div>
                    <div className="col-sm-2">
                        <p className='centrar'>Marketing</p>
                        <p className='number'>+51 9875647383</p>
                        <p className='horario'>Lunes-viernes, 9:00 am-5:00pm </p>
                    </div>
                    <div div className="col-sm-2">
                        <p className='centrar'>Linea de oficina</p>
                        <p className='number'>+51 9191595783</p>
                        <p className='horario'>Lunes-Sabado, 9:00 am-5:00 pm</p>
                    </div>
                    <div div className="col-sm-2">
                        <p className='centrar'>Correo electrónico</p>
                        <p id='email'>ecomerceunid.com@gmail.com</p>
                        
                    </div>
                </div>
                <p id='salto'>.</p>
            </div>
        </div>
    );
}

export default Telefonos;
