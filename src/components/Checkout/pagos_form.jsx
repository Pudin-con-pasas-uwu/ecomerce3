// https://formsubmit.co/
// agregar el monto max que va a pagar 
// checar si se nesesita mas campos

import { useRouter } from 'next/router';


const Pagos = () => {
  // obtener la consulta de URL
  const router = useRouter();
  const subtotal = router.query.subtotal;
  return (
            <div>
             <div className="container formcontainer">
                <form action="https://formsubmit.co/confirmacionecomers@gmail.com " method="POST" >
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-4">
                        <label className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" name="name" placeholder='Nombres y apellidos'  required />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">correo electronico</label>
                        <input type="email" className="form-control" name="email" placeholder='correo'  required />
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-4">
                        <label className="form-label">Ciudad</label>
                        <input type="text" className="form-control" name="message" placeholder='Ciudad' required />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">direccion</label>
                        <input type="text" className="form-control" name="direccion" placeholder='direccion' required />
                      </div>
                    </div>
                  </div>
                  <div className="pagar_now">
                    <button className="btn" id='boton_pago' type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">pagar </button>
                  </div>
                  <input type="hidden" name="_next" value="http://localhost:3000" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value={`Gracias por tu pedido. Tu solicitud será revisada contra disponibilidad de inventario, 
                  de ser confirmada recibirás un correo electrónico con más detalles.
                  Los detalles de tu pedido se indican a continuación.Total del pedido (impuestos aplicables incluídos): ${subtotal}`} />
                </form>
              </div>

              {/* Modal  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Pedido realizado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Su pedido ha sido relizado con exito
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default Pagos;