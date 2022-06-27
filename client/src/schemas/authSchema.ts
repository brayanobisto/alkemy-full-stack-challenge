import * as yup from 'yup'

export const register = yup
  .object({
    email: yup.string().required('Ingrese un correo electrónico').email('Ingrese un correo electrónico válido').lowercase(),
    password: yup
      .string()
      .required('Ingrese una contraseña')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-zñÑ\d@$!%*#?&]{8,}$/,
        'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y un símbolo'
      ),
    confirmPassword: yup
      .string()
      .required('Confirme su contraseña')
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  })
  .required('El registro es requerido')

export const login = yup
  .object({
    email: yup.string().required('Ingrese su correo electrónico').email('Ingrese un correo electrónico válido').lowercase(),
    password: yup
      .string()
      .required('Ingrese su contraseña')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-zñÑ\d@$!%*#?&]{8,}$/,
        'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y un símbolo'
      ),
  })
  .required('El ingreso es requerido')
