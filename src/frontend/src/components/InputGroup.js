import React from 'react'
import classnames from 'classnames'

function InputGroup({label, type, name, onChangeHandler, errors, value}) {
  return (
    <div className="mb-3">
    <label htmlFor="Email" className="form-label">
      {label}
    </label>
    <input type={type} value={value} className={(classnames("form-control", {"is-invalid": errors}))}  name={name} onChange={onChangeHandler}/>
    {
      errors && (<div className="invalid-feedback">
      {errors}
    </div>)
    }
  </div>
  )
}

export default InputGroup