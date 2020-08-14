import React from 'react';
import Fade from 'react-reveal/Fade';

function First() {

    const divStyle = {
        height: '100vh',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imgStyle = {
        height: '50vh'
    };

    return(
        <div style={divStyle}>
            <div className="row">
                <Fade left>
                    <div className="col-12">
                        <img className="img-fluid" style={imgStyle}
                            src={`${process.env.PUBLIC_URL}/assets/images/home_image.png`}
                            alt="InicioImagen"/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default First;

