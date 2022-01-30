import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-Zа-яА-Я]{1,30}$')).required().messages({
        'string.empty':'не може бути пустим',
        'string.pattern.base' : "мінімум 1 символ,макс 30 смволів"
    }),
    year : Joi.number().min(1980).max(2022).required().messages({
        'number.base':'рік від 1980 до 2022'

    }),
    price: Joi.number().min(500).max(1000000).required().messages({
        'number.base':'ціна від 500 до 1000000',
        'number.min' : 'мінімальна ціна 500',
        'number.max' : 'максимальна ціна 1000000'
    })
})


