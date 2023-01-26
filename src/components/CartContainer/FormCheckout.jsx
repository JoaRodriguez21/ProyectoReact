import React, { useState } from "react";
import InputForm from "./ImputForm";
import "./cartContainer.css"



/* function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
      <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
} */

export default function FormCheckout(props) {
    const [userData, setUserData] = useState({
      name: "",
      phone: "",
      email: "",
    });
  
    let fieldsForm = Object.keys(userData);
    //console.log(userData)
  
    function onInputChange(evt) {
      let value = evt.target.value;
      let inputName = evt.target.name;
  
      let newState = { ...userData };
      // dynamic props
      newState[inputName] = value;
      setUserData(newState);
    }
  
    function onSubmit(evt) {
      evt.preventDefault();
      console.log(`Gracias por tu compra!`);
    }
  
    function formIsInvalid() {
      return !(
        userData.name !== "" &&
        userData.phone !== "" &&
        userData.email !== ""
      );
    }
  
    return (
      <form onSubmit={onSubmit}>
        <h1>Llena tus datos para finalizar la compra</h1>
        {fieldsForm.map((field) => (
          <InputForm
            value={userData[field]}
            name={field}
            onChange={onInputChange}
            label={field}
            userData={userData}
          />
        ))}
        <button
          className="me-3 btnBasic"
          onClick={(evt) => props.onCheckout(evt, userData)}
          disabled={formIsInvalid()}
          type="submit"
        >
          Crear orden
        </button>
  
        <button className="me-3 btnBasic" onClick={() => setUserData({ name: "", email: "", phone: "" })}>
          Limpiar Formulario
        </button>
      </form>
    );
  }