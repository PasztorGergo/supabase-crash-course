import React from "react";
import Image from "next/image";
import { useAuth } from "../../context/AuthProvider";
import Link from "next/link";

type Props = {
  width?: string;
};

export default function Avatar({ width }: Props) {
  const { user, loginWithTwitter } = useAuth();
  return user ? (
    <Link href="/profile">
      <div
        className={`aspect-w-1 aspect-h-1 w-12 overflow-hidden rounded-full bg-gray-200 cursor-pointer`}
      >
        <Image
          src={user?.user_metadata.picture}
          layout="fill"
          objectFit="cover"
          className="hover:opacity-75 duration-300 ease-in-out rounded-full"
        />
      </div>
    </Link>
  ) : (
    <div
      className={`aspect-w-1 aspect-h-1 w-12 overflow-hidden rounded-full bg-gray-200 cursor-pointer`}
      onClick={loginWithTwitter}
    >
      <Image
        src="/user.png"
        layout="fill"
        objectFit="cover"
        className="hover:opacity-75 duration-300 ease-in-out rounded-full"
      />
    </div>
  );
}
