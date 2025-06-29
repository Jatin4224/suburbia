import { ButtonLink } from "@/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";

type Props = {
  skater: Content.SkaterDocument;
  index: number; //used for changing colors of squiggle
};

export function Skater({ skater, index }: Props) {
  const colors = [
    "text-brand-pink",
    "text-brand-blue",
    "text-brand-orange",
    "text-brand-lime",
  ];
  const scribbleColor = colors[index];
  let margin = "mt-6"; // default

  if (index === 0) {
    margin = "mt-14 translate-y-8";
  } else if (index === 1) {
    margin = "mt-12  translate-y-6 ";
  } else if (index === 2) {
    margin = "mt-10 translate-y-10";
  } else if (index === 3) {
    margin = "mt-10 translate-y-12";
  }

  let role = "";
  if (index === 0) {
    role = "SDE at SendAI";
  } else if (index === 1) {
    role = "SDE at Station Inc";
  } else if (index === 2) {
    role = "A visionary educator";
  } else if (index === 3) {
    role = "SDE at Quicksaas";
  }
  return (
    <div className="group relative flex flex-col items-center">
      <div className="skater stack-layout overflow-hidden relative w-full">
        {/* Background Image */}
        <PrismicNextImage
          field={skater.data.photo_background}
          width={500}
          imgixParams={{ q: 20 }}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]"
        />

        {/* Scribble Path */}
        <SkaterScribble
          className={clsx(
            "absolute w-full h-full text-white pointer-events-none",
            scribbleColor
          )}
        />

        {/* Foreground Image */}
        <PrismicNextImage
          field={skater.data.photo_foreground}
          width={500}
          alt=""
          className={`${margin}  mr-6 transform transition-transform duration-1000 ease-in-out group-hover:scale-110`}
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-0.3rem] block">{skater.data.first_name}</span>
          <span className="block">{skater.data.last_name}</span>
        </h3>
      </div>
      <ButtonLink
        field={skater.data.customizer_link}
        size="sm"
        className="mt-2"
      >
        {role}
      </ButtonLink>
    </div>
  );
}
