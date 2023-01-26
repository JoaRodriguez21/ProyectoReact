import React from 'react'
import "./cartContainer.css"

function InputForm(props) {
    return (
      <div>
        
        <input
        className='imputsForm'
        placeholder={props.label}
          value={props.value}
          name={props.name}
          type="text"
          onChange={props.onChange}
        />
      </div>
    );
  }


export default InputForm;