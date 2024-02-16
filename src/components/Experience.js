import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({
  position,
  company,
  time,
  tech,
  address,
  work,
  companyLink,
  certificate,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      {/* // */}
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {tech}
        </p>
        <a
          href={companyLink}
          target="_blank"
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm underline"
        >
          {certificate}
        </a>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-20">
      <h2 className="font-bold text-6xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-20 "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Mern Developer"
            company="Health Umbrella Foundation"
            time ="August'2022 - July'2023"
            address="Remote"
            work = "As a MERN developer at Health Umbrella Foundation, I leverage my expertise in MongoDB, Express, React, and Node.js to develop and maintain web applications that support the organization's mission in the healthcare sector. My primary responsibility is to create efficient and user-friendly solutions that improve access to healthcare services for our users and stakeholders."
            tech="Tech: ReactJs, Tailwind CSS, Redux Toolkit, NodeJs, ExpressJs, MongoDB, REST API."
            companyLink="#"
            certificate="certificate"
          />
        </ul>
      </div>
      <h3 className="font-bold text-5xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
      Internship
      </h3>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Frontend Developer | UI/UX designer"
            company="LNMIIT Undergraduate Summer Internship Program (LUSIP)"
            time="June'2022 - July'2022"
            address="virtual"
            work="Led UI/UX design efforts using Figma, efficiently coordinating tasks and collaborating with interns to improve project delivery time by 15%. Contributed to React.js-based frontend development, expanding technical proficiency, optimizing page load times, resulting in a 25% improvement in website performance."
            tech="Tech: Figma, Html, Css, Javascript, ReactJs, Redux-toolkit, Tailwind Css, Bootstrap."
            companyLink="https://management.ind.in/forum/lnmiit-lusip-250268.html"
            certificate="certificate"
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
