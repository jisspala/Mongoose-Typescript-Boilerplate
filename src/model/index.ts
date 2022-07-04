import {model,Model } from "mongoose";
import { cuser } from "../types";
import { userSchema} from "./user";


const User :Model<cuser>= model<cuser>("User", userSchema);

export {User};