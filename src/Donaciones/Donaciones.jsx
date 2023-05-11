import { Fragment } from "react";


import './Donaciones.css';

function Donaciones() {
    return (
        <Fragment>
            <div className="container div-donaciones text-center">
                <p>
                    ¿Sabías que tenemos una campaña para los perritos en situación de calle y refugio?
                    <br />
                    ¡Con tu ayuda podemos darle una mejor vida a los animales en está situación! PetServices también es una organización enfocada en el bienestar y protección animal.❤️ 
                    <br />
                    <br />
                    -También tenemos una campaña para el mantenimiento de nuestra plataforma, al ser una organización independiente requerimos de tu ayuda para seguir funcionando y ofrecerte los mejores servicios para tu mascota  🦴  
                    <br />
                    <br />
                    Puedes hacer tu aporte acá  👇 
                </p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="TXUAUVY8A9SRA" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_CR/i/scr/pixel.gif" width="1" height="1" />
            </form>
            </div>
        </Fragment>
    );
};

export{Donaciones};