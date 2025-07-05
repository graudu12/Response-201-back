import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    favoriteRecipes: [{
      type: Schema.Types.ObjectId,
      ref: "recipe",
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//cховаємо пароль для фронтенду
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserCollection = model('user', userSchema);
