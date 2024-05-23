import { useField } from 'formik'


export const TextInput = ({label, placeholder, ...props}) => {
    const[field, meta] = useField(props);
    console.log({field, meta})
  return (
    <div className='form__group'>
        <label className='form__label'>{label}</label>
        <input className='form__input' placeholder={placeholder}  {...field}/>
        {meta.touched && meta.error ? <div className='error'>{meta.error} </div> : null}
    </div>
  )
}
