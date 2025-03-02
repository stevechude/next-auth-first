import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

const UserInfo = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Next Auth v5 + Next Js 15</p>
      <p>User is signed in with name: {session?.user?.name}</p>
      <p>User is signed in with email: {session?.user?.email}</p>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          width={50}
          height={50}
          alt={session?.user?.name ?? "Avatar"}
          className="rounded-full border"
        />
      )}
    </div>
  );
};

export default UserInfo;
