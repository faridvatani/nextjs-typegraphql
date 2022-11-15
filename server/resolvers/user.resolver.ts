import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import {
  SignUpInput,
  UserResponse,
} from '../schemas/user.schema';
import UserService from '../services/user.service';

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => UserResponse)
  @Query(() => UserResponse)
  async signupUser(@Arg('input') input: SignUpInput) {
    return this.userService.signUpUser(input);
  }

}
