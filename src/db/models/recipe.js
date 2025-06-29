import { model, Schema } from 'mongoose';

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
      type: [String],
      required: true,
    },
    ingredients: [
      {
        name: {
          type: String,
          required: true,
        },
        measure: {
          type: String,
          required: true,
        },
      },
    ],
    recipeCategory: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    cookingTime: {
      type: Number,
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

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

export const CategoryCollection = model('category', categorySchema);

export const IngredientCollection = model('ingredient', ingredientSchema);

export const RecipesCollection = model('recipe', recipeSchema);
