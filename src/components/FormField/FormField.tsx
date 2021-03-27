import React from "react";
import { ErrorMessage, Field } from "formik";
import classNames from 'classnames';

interface FormField {
  name: string
  type: string
  placeholder?: string
  className?: string
  text?: string
  [x:string]: any
}

export const FormField: React.FC<FormField> =
    ({
       name,
       type,
       placeholder,
       className,
       text,
       ...props
     }) => {
  return (
      <Field type={type} name={name} placeholder={placeholder} {...props}>
        {({ field }: any) => (
            <div className={classNames(className, 'form-group')}>
              {text ? <label>{text}</label> : ''}
              <input
                  type={type}
                  {...field}
                  placeholder={placeholder}
                  className='form-control'
              />
              <ErrorMessage name={name} className='text-danger'>
                {(msg) => <div className='text-danger'><small>{msg}</small></div>}
              </ErrorMessage>
            </div>
        )}
      </Field>
  )
}
