import joi from 'joi';

const authSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[0-9]{3,8}$')).required()
});

export default authSchema;