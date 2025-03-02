"use server";

import { auth } from "@/auth";
import SignInBtn from "@/components/SignInBtn";
import SignOutBtn from "@/components/SignOutBtn";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <Link
          href={"/user-info"}
          className="rounded-2xl p-2 bg-blue-400 text-white"
        >
          User Info
        </Link>
        <SignOutBtn />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>You are not signed in</p>
      <SignInBtn />
    </div>
  );
}
