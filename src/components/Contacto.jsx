import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { TextInput } from './TextInput'


export const Contacto =()=>{
  return (
        <main className='layout__content'>
          <section className='headernav content__contact'>
        
          <header className='contact__header'>
            <h1 className='contact__title'>Contacto</h1>
          </header>

          <form className="contact__form" action="https://formsubmit.co/4a1d2e27bdc1f6b9b5bbf46dff1a61e1" method="POST">
            <div className="form__container">
              <div className="form__group">
                <input type="text" className="form__input" name='name' required placeholder='Nombre'/>
                <label className="form__label">Nombre</label>
              </div>
              <div className="form__group">
                <input type="text" className="form__input" name='email' required placeholder='Email'/>
                <label className="form__label">Correo</label>
              </div>
              <div className="form__group">
                <input type="text" className="form__input" name='subject' required placeholder='Asunto'/>
                <label form='subject' className="form__label">Asunto</label>
              </div>
              <div className="form__group">
                <textarea rows='4' className="form__input form__input--textarea" name='message' required placeholder='Mensaje'/>
                <label className="form__label">Mensaje</label>
              </div>
            </div>
            <button type='submit' className='form__button'>Enviar</button>

          </form>

          <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'></script>
          <script type='text/javascript'></script>

    
          
    </section>
    </main>
  )

}

// const validate = (values) => {
//   const errors = {}

//   if (!values.name) {
//     errors.name = 'Requerido'
//   } else if (values.name.length < 5) {
//     errors.name = 'El nombre es muy corto'
//   }

//   if (!values.lastname) {
//     errors.lastname = 'Requerido'
//   } else if (values.lastname.length < 5) {
//     errors.lastname = 'El apellido es muy corto'
//   }

//   if (!values.email) {
//     errors.email = 'Requerido'
//   } else if (values.email.length < 10) {
//     errors.email = 'El correo es muy corto'
//   }

//   if (!values.message) {
//     errors.message = 'Requerido'
//   } else if (values.message.length < 30) {
//     errors.message = 'El mensaje es muy corto'
//   }
//   return errors
// }

// export const Contacto = () => {

//   return (
//     <main className='layout__content'>
//       <section className='headernav content__contact'>
    
//       <header className='contact__header'>
//         <h1 className='contact__title'>Contacto</h1>
//       </header>

//       <div className='contact__container'>
//     <Formik
//       initialValues={{
//         name: '', lastname: '', email: '', message: '',
//       }}
//       validate={validate}
//       onSubmit={values => console.log(values)}
//     >

//     <Form className='contact__form'>
//       <div className='form__container'>
//       <TextInput name='name' label='Nombre' placeholder='Nombre'/>
//           {/* <label>Nombre</label>
//           <Field name='name' type='text'/>
//           <ErrorMessage name='name'/> */}
//       <TextInput name='lastname' label='Asunto' placeholder='Asunto'/>
//           {/* <label>Apellido</label>
//           <Field name='lastname' type='text'/>
//           <ErrorMessage name='lastname'/> */}
//           <TextInput name='email' label='Correo' placeholder='Correo'/>
//           {/* <label>Correo</label>
//           <Field name='email' type='email' className='form__input'/>
//           <ErrorMessage name='email'/> */}
          
//           {/* <TextInput name='message' label='Mensaje' placeholder='Mensaje'/> */}
//           <label className='form__label'>Mensaje</label>
//           <Field name='message' as='textarea' className='form__input form__input--textarea' placeholder='Mensaje'/>
//           <ErrorMessage name='message'/>
          
//           <br />
          
//           </div>
          
//         </Form>

//     </Formik>
    
/* 
{/* 
 <main className='layout__content'>
       <section className='headernav  content__page content__contact'>
         <header className='contact__header'>
           <h1 className='contact__title'>Contacto</h1>
        </header>
       </section>


     </main>
    <form className='contact' action='mailto:"correoprueba@correoprueba.cl"'>
      <input type='text' placeholder='Nombre'/>
      <input type='text' placeholder='Apellidos'/>
      <input type='text' placeholder='Email'/>
      <input type='text' placeholder='Motivo contacto'/>
      <input type='submit' value="Enviar"/>
    </form> */