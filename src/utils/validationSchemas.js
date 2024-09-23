import * as yup from 'yup'

export const addProductSchema = yup.object({
    name: yup.string().min(5).max(300).required('Este item é obrigatório.'),
    material: yup.string().min(5).max(300).required('Este item é obrigatório.'),
    price: yup.number().min(0,'Este item deve ser maior do que 0').required('Este item é obrigatório.'),
    type: yup.string().required('Este item é obrigatório.'),
    category:  yup.string().required('Este item é obrigatório.'),
    features: yup.array().of(yup.object({
        feature: yup.string().min(5).max(300).required('Este item é obrigatório.')
    })).min(1,'Deve haver pelo menos 1 caractérisca para o produto'),
})