import * as yup from 'yup'

export const addProductSchema = yup.object({
    name: yup.string().min(5).max(300).required('Este item é obrigatório.'),
    material: yup.string().min(5).max(300).required('Este item é obrigatório.'),
    price: yup.number().min(1, 'Este item deve ser maior do que 1').required('Este item é obrigatório.'),
    typeId: yup.string().required('Este item é obrigatório.'),
    category: yup.string().required('Este item é obrigatório.'),
    features: yup.array().of(yup.string().required()).min(1, 'Deve haver pelo menos 1 caractérisca para o produto'),
})

export const addStockSchema = yup.object({
    principal: yup.boolean(),
    color: yup.string(),
    S: yup.number().min(0, 'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
    M: yup.number().min(0, 'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
    L: yup.number().min(0, 'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
    XL: yup.number().min(0, 'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
    XXL: yup.number().min(0, 'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
})