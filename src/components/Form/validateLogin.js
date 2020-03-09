export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.password) {
    errors.password = 'Preencha sua senha';
  } else if (values.password.length < 10) {
    errors.password = 'A senha precisa ter mais de 10 caracteres';
  }

  return errors;
}
