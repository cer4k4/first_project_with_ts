import { Schema, model } from "mongoose";
import { UserRoles } from "./enum";
import { IUser } from "./user.interface";

const userSchema: Schema<IUser> = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  fullName: { type: String },
  role:     { type: String, default: UserRoles.USER, required: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);



export = {UserModel};