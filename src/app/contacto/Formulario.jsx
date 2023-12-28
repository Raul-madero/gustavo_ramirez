'use client'
import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import imagenContacto from "../../img/contacto.jpg"
import Image from "next/image"

const Formulario = () => {
    const [contacto, setContacto] = useState("")
    const handleChecked = (e) => {
        console.log(e)
        e.target.id === "telefono" ? setContacto("telefono") : setContacto("email")
    }
    return (
        <Form className="w-75 mx-auto border border-1 border-brand rounded-2 p-4 mt-4 d-flex flex-column align-items-center justify-content-center">
            <Image src={imagenContacto} alt="Imagen contacto"/>
            <fieldset className="align-self-start w-100 border border-gray border-opacity-50 rounded-1 p-2 my-2">
                <legend className="container-md w-50 mx-auto">Informacion Personal</legend>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" className="form-control" id="name" placeholder="Escribe tu nombre aqui"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea className="form-control" id="mensaje" rows={5}/>
                </div>
            </fieldset>
            <fieldset className="align-self-start w-100 border border-gray border-opacity-50 rounded-1 p-2 my-2">
                <legend>Forma de Contacto</legend>
                <div className="form-check">
                    <input onClick={(event) => handleChecked(event)}  className="form-check-input" type="radio" name="contacto" id="telefono"/>
                    <label htmlFor="telefono" className="form-check-label">Telefono</label>
                </div>
                <div className="form-check">
                    <input onClick={(e) => handleChecked(e)} className="form-check-input" type="radio" name="contacto" id="Email"/>
                    <label htmlFor="Email" className="form-check-label">Email</label>
                </div>
                {contacto === "" ? <></> : contacto === "telefono" ?  
                    <>
                    <div className="form-group">
                        <label htmlFor="numero">Tu telefono</label>
                        <input className="p-2 ms-2" type="tel" name="numero" id="numero" placeholder="ejemplo@correo.com" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="fecha">Cuando te podemos contactar:</label>
                        <input type="date" name="fecha" id="fecha" className="ms-2 p-2"/>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="hora">A que hora te podemos contactar:</label>
                        <input type="time" name="hora" id="hora" className="ms-2 p-2"/>
                    </div>
                    </>
                    :  <div className="form-group">
                        <label htmlFor="email">Tu correo</label>
                        <input className="p-2 ms-2" type="email" name="email" id="email" placeholder="ejemplo@correo.com" />
                    </div>}
            </fieldset>
            <Button variant="success" type="submit" className="text-light">Enviar</Button>
        </Form>
    )
}

export default Formulario