import React from 'react'
interface IInputProps {
    className: string
    defaultValue?: string
}
const Input = React.forwardRef<HTMLInputElement,IInputProps>((props, ref) => {
  return (
    <input {...props} ref={ref}/>
  )
})

export default Input