import * as yup from 'yup'

export const operationSchema = yup
  .object({
    concept: yup.string().required('Ingrese el concepto').max(25, 'Máximo 25 caracteres'),
    amount: yup
      .number()
      .typeError('Ingrese un monto válido')
      .min(1, 'El monto debe ser mayor a 0')
      .max(99999999.99, "El monto debe ser menor a 100'000'000.00"),
    date: yup.string().required('La fecha es requerida'),
    type: yup.string().required('Seleccione el tipo de la operación').nullable(),
    category: yup.string().required('Seleccione una categoría'),
  })
  .required('La operación es requerida')
