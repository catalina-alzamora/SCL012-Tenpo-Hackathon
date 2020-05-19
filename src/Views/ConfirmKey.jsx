import React from 'react'
import back from '../img/back.png'
import '../css/CreateKey.css'
import { Link } from 'react-router-dom';

const ConfirmKey = () => {
    return (
        <div className="key-container">
            <div className="key-header">
                <Link to="/createkey"><img src={back} alt="Volver atras"/></Link>
                <p>¡Y por último! Tu seguridad</p>
            </div>
            <div className="key-body">
                <p className="key-body-title" >Confirma tu clave de acceso</p>
            </div>
            <div className="key-inputs" >
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
            </div>
            <div className="key-button">
                <Link to="/FingerPrint"><button>Finalizar</button></Link>
            </div>
        </div>
    )
}

export default ConfirmKey
