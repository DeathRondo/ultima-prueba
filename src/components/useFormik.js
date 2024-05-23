import React from 'react'
import { useFormik } from 'formik'


const validate = (values)=>{
  const errors = {}

      if(!values.name) {
        errors.name = 'Requerido'
      }else if(values.name.length < 5){
        errors.name = 'El nombre es muy corto'
      }

      if(!values.lastname) {
        errors.lastname = 'Requerido'
      }else if(values.lastname.length < 5){
        errors.lastname = 'El apellido es muy corto'
      }

      if(!values.email) {
        errors.email = 'Requerido'
      }else if(values.email.length < 10){
        errors.email = 'El correo es muy corto'
      }

      if(!values.message) {
        errors.message = 'Requerido'
      }else if(values.message.length < 30){
        errors.message = 'El mensaje es muy corto'
      }
      return errors
}

export const Contacto = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: values => console.log(values)
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input type='text' {...formik.getFieldProps('name')}/>
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      

      <label>Apellido</label>
      <input type='text' {...formik.getFieldProps('lastname')}
      />{formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}



      <label>Correo</label>
      <input type='mmail' {...formik.getFieldProps('email')}
      /> {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label>Mensaje</label>
      <input type='text' {...formik.getFieldProps('message')} 
      />{formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
<br/>
      <button type='submit-'>Enviar</button>
    </form>

   
  )
}