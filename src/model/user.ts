import { Schema} from "mongoose";
import { cuser } from "../types";

const userSchema: Schema = new Schema<cuser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
export {userSchema};