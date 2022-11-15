import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class SignUpInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  mobile: string;
}

@ObjectType()
export class UserData {
  @Field(() => String)
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  mobile: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class UserResponse {
  @Field(() => String)
  status: string;

  @Field(() => UserData)
  user: UserData;
}
