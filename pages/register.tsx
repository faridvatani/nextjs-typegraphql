import type { NextPage } from "next";
import { object, string, TypeOf, z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import FormInput from "../client/components/FormInput";
import { LoadingButton } from "../client/components/LoadingButton";
import {
  SignUpUserMutation,
  useSignUpUserMutation,
} from "../client/generated/graphql";
import graphqlRequestClient from "../client/requests/graphqlRequestClient";

const regex = /^[0]{1}[9]{1}[0-9]{9}$/;
const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  mobile: string().regex(regex),
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const Home: NextPage = () => {
  const { mutate: SignUpUser, isLoading } = useSignUpUserMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess(data: SignUpUserMutation) {
        console.log(data.signupUser.user);
      },
      onError(error: any) {
        error.response.errors.forEach((err: any) => {
          console.log(err.message);
        });
      },
    }
  );

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    SignUpUser({ input: values });
  };
  return (
    <section className="py-8 min-h-screen grid place-items-center">
      <div className="w-full">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign Up to your account
              </h2>
            </div>
            <FormProvider {...methods}>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <FormInput
                      label="Full Name"
                      name="name"
                      placeholder="Full Name"
                      inputClassName="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <FormInput
                      label="mobile"
                      name="mobile"
                      placeholder="Mobile Phone"
                      inputClassName="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <LoadingButton loading={isLoading}>Submit</LoadingButton>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
