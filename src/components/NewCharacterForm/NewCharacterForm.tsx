import React from "react";
import * as yup from 'yup';
import { validationMessages } from "../../constants/validationMessages";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "reactstrap";
import { FormField } from "..";
import { useDispatch } from "react-redux";
import { newCharacter } from "../../state/characters/actions";
import { CustomCharacterInstance } from "../../constants/character";

export const NewCharacterForm: React.FC = () => {
  const dispatch = useDispatch();

  const newCharacterSchema = yup.object().shape({
    name: yup
        .string()
        .min(1, validationMessages.tooShort + '1')
        .max(20, validationMessages.tooLong)
        .required(validationMessages.required),
    email: yup
        .string()
        .email(validationMessages.email)
        .required(validationMessages.required),
    image: yup
        .string()
        .required(validationMessages.required)
        .matches(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/),
    gender: yup
        .string()
        .required(validationMessages.required)
  })

  const handleSubmit = (character: CustomCharacter) => {
    dispatch(newCharacter({
        ...character,
        id: Date.now()
    }))
  }

  return (
      <div className="bg-secondary p-3 rounded">
        <h2>New character</h2>
        <Formik initialValues={CustomCharacterInstance}
                validationSchema={newCharacterSchema}
                onSubmit={handleSubmit}
        >
          {({ isValid, ...props}) => (
              <Form>
                <FormField className="mb-2" text="Name" type="text" name="name"/>
                <FormField className="mb-2" text="Email" type="email" name="email"/>
                <FormField className="mb-2" text="Image url" type="text" name="image"/>
                <div className="d-flex flex-column">
                  <label>
                    <Field className="cursor-pointer" type="radio" name="gender" value="Male"/>
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="mb-0">
                    <Field className="cursor-pointer" type="radio" name="gender" value="Female"/>
                    <span className="ml-2">Female</span>
                  </label>
                  <ErrorMessage name="gender" className="text-danger">
                    {(msg) => <div className='text-danger'><small>{msg}</small></div>}
                  </ErrorMessage>
                </div>
                <Button type="submit" outline color="light" className="mt-4">
                  Create
                </Button>
              </Form>
          )}
        </Formik>
      </div>

  )
}
