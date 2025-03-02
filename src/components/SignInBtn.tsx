"use client";
import { login } from "@/lib/actions/auth";
import React from "react";

const SignInBtn = () => {
  return (
    <div>
      <button
        onClick={() => login()}
        className="bg-blue-400 text-white rounded-2xl p-2 cursor-pointer"
      >
        Signin with Github
      </button>
    </div>
  );
};

export default SignInBtn;
