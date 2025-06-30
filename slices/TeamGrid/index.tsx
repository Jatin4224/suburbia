import React from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/Slide-In";

export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy text-white"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center">
          <PrismicText field={slice.primary.heading} />{" "}
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            <SlideIn>
              {skater.data.first_name && (
                <Skater index={index} skater={skater} />
              )}
            </SlideIn>
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
