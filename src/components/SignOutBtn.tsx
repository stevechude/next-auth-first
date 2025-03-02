"use client";
import { logout } from "@/lib/actions/auth";
import React from "react";

const SignOutBtn = () => {
  return (
    <div>
      <button
        onClick={() => logout()}
        className="bg-blue-400 text-white rounded-2xl p-2 cursor-pointer"
      >
        Signin Out
      </button>
    </div>
  );
};

export default SignOutBtn;
