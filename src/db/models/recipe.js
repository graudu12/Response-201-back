import { model, Schema } from "mongoose";


const ingredientSchema = new Schema(
    {
        name: {
            type: String,
            enum: ["Salt", "Black pepper", "Sugar", "Oil", "Butter", "Flour", "Eggs", "Milk", "Garlic", "Onion", "Tomatoes", "Potatoes", "Carrots", "Rice", "Pasta", "Chicken", "Beef", "Pork", "Fish", "Sour cream", "Cheese", "Bread", "Lemon", "Parsley", "Dill", "Soy sauce", "Honey", "Paprika", "Vinegar", "Chili pepper"],
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
    }
);



const recipeSchema = new Schema(
    {
        nameRecipe: {
            type: String,
            required: true,
        },
        dishPhoto: {
            type: String,
            required: false,
        },
        recipeDescription: {
            type: [String],
            required: true,
        },
        ingredientsList: {
            type: [ingredientSchema],
            required: true,
        },
        recipeCategory: {
            type: String,
            enum: ["Appetizers", "Soups", "Salads", "Main courses", "Side dishes", "Desserts", "Baked goods", "Sandwiches", "Pasta & Noodles", "Pizza", "Seafood dishes", "Vegetarian & Vegan dishes", "Grill & BBQ", "Breakfast dishes", "Beverages", "Sauces & Dressings"],
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
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const RecipesCollection = model("recipe", recipeSchema);
