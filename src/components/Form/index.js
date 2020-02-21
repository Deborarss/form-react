import React from 'react';

import useForm from '../../useForm';
import validate from '../../validateLogin';

import { ErrorMsg, Input, LoginForm, DivInputs, LoginBtn } from './styles';

const Form = () => {
  const { handleChanges, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Logado com sucesso');
  }

  return (
    <div>
      <LoginForm noValidate>
        <h1>Login</h1>
        <DivInputs>
          <Input
            onChange={handleChanges}
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            error={errors.email}
          />
          <ErrorMsg error>{errors.email}</ErrorMsg>
        </DivInputs>
        <DivInputs>
          <Input
            onChange={handleChanges}
            type="password"
            placeholder="Senha"
            name="password"
            value={values.password}
            error={errors.password}
          />
          <ErrorMsg error>{errors.password}</ErrorMsg>
        </DivInputs>
        <LoginBtn onClick={handleSubmit} type="submit">
          Logar
        </LoginBtn>
      </LoginForm>
    </div>
  );
};

export default Form;
