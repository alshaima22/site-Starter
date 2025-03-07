"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
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
        subtitle: "Our Projects",
        description:
          "Explore our diverse range of projects that showcase our expertise and commitment to delivering high-quality solutions.",
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
            New
          </span>{" "}
          Student Housing Platform for Tripoli University
        </span>
        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
          A Complete Solution for
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
            Student Housing Management
          </span>
        </h2>
        <p>
          We developed an integrated student housing platform for Tripoli University, leveraging modern technologies to streamline operations for staff and enhance the student experience.
        </p>

        <div className="mt-7.5 flex items-center gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              01
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
              Student-Friendly Interface
            </h3>
            <p>The platform features a landing page for housing information, enabling students to register and submit housing applications seamlessly.</p>
          </div>
        </div>
        <div className="mt-7.5 flex items-center gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              02
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
              Administrative Management System
            </h3>
            <p>Staff can access accurate statistics, manage student processes electronically, and generate detailed reports on students, buildings, rooms, and personnel.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      {/* <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Packed with All Essential {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Integrations
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
