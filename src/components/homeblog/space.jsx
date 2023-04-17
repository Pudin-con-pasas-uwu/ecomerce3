import React from "react";

const Space = () => {
  return (
    <div>
      <div className="container space">
        <h2 className="Espacio " id="StyleTextHeader" >Esta es tu tienda</h2>
        <p className="Espacio2 ">
        Porque comprar en otras tiendas, cuando puedes comprar en esta.
        </p>
        <hr />
        <div className="container Espacio3">
          <div className="row ">
          <div className="col-lg-6">
              <p>  Comprar en nuestra tienda online es la mejor opción para ti, porque te ofrecemos una amplia selección de productos de alta calidad a precios competitivos. Además, nuestro proceso de apartados es fácil, rápido y seguro. 
            Nos esforzamos por brindarte una experiencia de compra excepcional y un servicio al cliente amigable y profesional. ¡No esperes más y haz tu compra con nosotros hoy mismo!</p>
              <br />
            </div>
            <div className="col-lg-6">
              <p>Además, con nuestro servicio de soporte y apartados no tendrás que preocuparte porque tus mangas, figuras o pines se agoten,
                ya que nosotros desde el momento de que nos llegue la confirmación de tu compra, lo empaquetamos y encargamos de que llegue rápido y
                seguro a la puerta de tu casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;