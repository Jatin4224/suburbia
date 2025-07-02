import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import { Logo } from "./Logo";
import { Bounded } from "./Bounded";
import { FooterPhysics } from "./FooterPhysics";
import { asImageSrc } from "@prismicio/client";
import { SlideIn } from "./Slide-In";

type Props = {};

export async function Footer({}: Props) {
  //calling settings
  const client = createClient();
  const settings = await client.getSingle("settings");
  const boardTextureURLs = settings.data.footer_skateboards
    .map((item) => asImageSrc(item.skateboard, { h: 600 }))
    .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        {/* image */}
        <PrismicNextImage
          field={settings.data.footer_image}
          alt=""
          fill
          className="objec-cover"
          width={900}
        />{" "}
        {/* physics boards*/}
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        {/* Logo */}
        <Logo className="pointer-events-none relative   mix-blend-exclusion h-20 md:h-28" />{" "}
      </div>
      <SlideIn>
        <Bounded as="nav">
          <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
            {settings.data.navigation.map((item) => (
              <li
                key={item.link.text}
                className="hover:underline hover:scale-105"
              >
                <PrismicNextLink field={item.link} />
              </li>
            ))}
          </ul>
        </Bounded>
      </SlideIn>
    </footer>
  );
}
