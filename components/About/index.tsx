"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("translation");

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section
        id="projects"
        className="overflow-hidden pb-20 lg:pb-25 xl:pb-30"
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              subtitle: t("about.projects.subtitle"),
              description: t("about.projects.description"),
            }}
          />
          <div className="mt-10 flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative order-1 mx-auto aspect-[588/526.5] w-full md:order-none md:w-1/2"
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-b from-orange-100 to-transparent"></div>
              <Image
                src="/images/about/Frame.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/Frame.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right order-2 md:order-none md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  {t("about.projects.project1.new")}
                </span>{" "}
                {t("about.projects.project1.title")}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  {t("about.projects.project1.heading")}
                </span>
              </h2>
              <p>{t("about.projects.project1.description")}</p>

              {(t("about.projects.project1.features", {
                returnObjects: true,
              }) as any[]).map((feature: any, index: number) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {feature.number}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
