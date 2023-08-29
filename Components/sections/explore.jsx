"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "../customText";
import ExploreCard from "../exploreCard";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex  flex-col "
      >
        <TypingText title={"My Skills"} textStyle={"text-center"} />
        <TitleText
          title={
            <>
              Choose the world you want <br className=" md:block hidden" /> to
              explore
            </>
          }
          textStyle="text-center lg:leading-[75px] md:leading-[65px] sm:leading-[74.4px] leading-[45px] "
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;