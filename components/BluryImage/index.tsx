import React, { useState } from "react";
import Image from "next/image";
import { ImageType } from "../../models/imageType";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BluryImage({
  imageSrc,
  href,
  name,
  username,
}: Omit<ImageType, "id">) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <a href={href} className="group">
      <div className="aspect-square xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt={name}
          layout="fill"
          objectFit="cover"
          src={imageSrc}
          className={cn(
            "group-hover:opacity-75 duration-300 ease-in-out",
            isLoading
              ? "grayscale scale-110 blur-2xl"
              : "grayscale-0 scale-100 blur-none"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 ">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@{username}</p>
    </a>
  );
}
