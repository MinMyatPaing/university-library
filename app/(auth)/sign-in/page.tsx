"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";
import { signInWithCredentials } from "@/lib/actions/auth";

const SignIn = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignIn;
