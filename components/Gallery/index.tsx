import React from "react";
import { ImageType } from "../../models/imageType";
import BluryImage from "../BluryImage";

type Props = {
  data: Array<ImageType>;
};

export default function Gallery({ data }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl-grid-cols-4 xl:gap-x-8">
        {data.map(({ href, id, imageSrc, name, username }) => (
          <BluryImage
            href={href}
            imageSrc={imageSrc}
            key={id}
            name={name}
            username={username}
          />
        ))}
      </div>
    </div>
  );
}
