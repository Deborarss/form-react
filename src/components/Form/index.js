import React from 'react';
import useForm from './useForm';
import validate from './validateLogin';
import iconVisibility from '../../icons/visibility.svg';
import iconVisibilityOff from '../../icons/visibility_off.svg';

import {
  ErrorMsg,
  Input,
  LoginForm,
  DivInputs,
  LoginBtn,
  Icon,
} from './styles';

const Form = () => {
  const {
    handleChanges,
    handleSubmit,
    values,
    errors,
    show,
    showPassword,
    type = 'password',
  } = useForm(submit, validate);

  function submit() {
    console.log('Logado com sucesso');
  }

  function showIconVisibility() {
    if (type === 'password') {
      return (
        <Icon
          src={!show ? iconVisibilityOff : iconVisibility}
          onClick={showPassword}
        />
      );
    }
  }

  function defineType(type) {
    if (type === 'password' && !show) {
      return 'password';
    } else if (type === 'password' && show) {
      return 'text';
    }
    return type;
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
            type={defineType(type)}
            placeholder="Senha"
            name="password"
            value={values.password}
            error={errors.password}
          />
          {showIconVisibility()}
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
