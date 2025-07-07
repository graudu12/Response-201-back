import Joi from 'joi';

export const recipeValidationSchema = Joi.object({
    nameRecipe: Joi.string().min(10).max(100).required(),
    dishPhoto: Joi.string().optional(),
    recipeDescription: Joi.string().required(),
    instructions: Joi.string().required(),
    recipeCategory: Joi.string().required(),
    calories: Joi.string().required(),
    cookingTime: Joi.string().required(),

    ingredients: Joi.array()
        .items(
            Joi.object({
                id: Joi.string().length(24).hex().required(),
                measure: Joi.string().required(),
            })
        )
        .min(1)
        .required(),

    owner: Joi.string().length(24).hex().required(),
});
