import {
  getModelForClass,
  prop,
  ModelOptions,
  Severity,
  index,
} from "@typegoose/typegoose";

// Imports
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ mobile: 1 })
export class User {
  readonly _id: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true, unique: true, lowercase: true })
  mobile: string;
}

const UserModel = getModelForClass<typeof User>(User);
export default UserModel;

