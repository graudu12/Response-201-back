import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

const recipeSchema = new Schema(
  {
    nameRecipe: {
      type: String,
      required: true,
    },
    dishPhoto: {
      type: String,
    },
    recipeDescription: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'ingredient',
          required: true,
        },
        measure: {
          type: String,
          required: true,
        },
      },
    ],
    recipeCategory: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});



export const CategoryCollection = model('category', categorySchema);

export const IngredientCollection = model('ingredient', ingredientSchema);

export const RecipesCollection = model('recipe', recipeSchema);
