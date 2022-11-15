import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  signupUser: UserResponse;
};


export type MutationSignupUserArgs = {
  input: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  signupUser: UserResponse;
};


export type QuerySignupUserArgs = {
  input: SignUpInput;
};

export type SignUpInput = {
  mobile: Scalars['String'];
  name: Scalars['String'];
};

export type UserData = {
  __typename?: 'UserData';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  mobile: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  status: Scalars['String'];
  user: UserData;
};

export type SignUpUserMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'UserResponse', status: string, user: { __typename?: 'UserData', name: string, mobile: string, createdAt: any, updatedAt: any } } };


export const SignUpUserDocument = `
    mutation SignUpUser($input: SignUpInput!) {
  signupUser(input: $input) {
    status
    user {
      name
      mobile
      createdAt
      updatedAt
    }
  }
}
    `;
export const useSignUpUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>(
      ['SignUpUser'],
      (variables?: SignUpUserMutationVariables) => fetcher<SignUpUserMutation, SignUpUserMutationVariables>(client, SignUpUserDocument, variables, headers)(),
      options
    );