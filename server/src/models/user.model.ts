import mongoose from "mongoose";
import modelOptions from "./model.options.js";
import crypto from "crypto";
import { Model } from "mongoose";
import { SUser, SUsermethods } from "../types/interfaces.js";
type Usermodel = Model<SUser, {}, SUsermethods>;

const userSchema = new mongoose.Schema<SUser, SUsermethods, Usermodel>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profile: { type: String },
    salt: {
      type: String,
      required: true,
      select: false,
    },
  },
  modelOptions
);

userSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString("hex");

  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

userSchema.methods.validPassword = function (password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");

  return this.password === hash;
};

const userModel = mongoose.model<SUser, Usermodel>("User", userSchema);

export default userModel;
