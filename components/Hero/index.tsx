"use client";
import Image from "next/image";
import { useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const textDirectionClass = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                {t("hero.title")}
              </h4>
              <h1 className={`mb-5 pr-9 text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl xl:text-hero ${textDirectionClass}`}>
                <TypewriterEffect
                  words={t("hero.subtitle", { returnObjects: true }) as { text: string; className?: string }[]}
               className="text-justify" />
              </h1>
              <p className="text-base md:text-lg lg:text-xl">
                {t("hero.description")}
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* Form content */}
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[640/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/logoo.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/logoo.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;