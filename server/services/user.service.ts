import { ForbiddenError } from "apollo-server-micro";
import errorHandler from "../controllers/error.controller";
import UserModel, { User } from "../models/user.model";
import { disconnectDB } from "../utils/connectDB";

export default class UserService {
  // Sign up a new user
  async signUpUser(input: Partial<User>) {
    try {
      const user = await UserModel.create(input);
      await disconnectDB();
      return {
        status: 'success',
        user: user.toJSON(),
      };
    } catch (error: any) {
      if (error.code === 11000) {
        return new ForbiddenError('Mobile already exists');
      }
      errorHandler(error);
    }
  }
}
