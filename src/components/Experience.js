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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      {/* // */}
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize">
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
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm underline">
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
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-20">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* HireQuotient Experience */}
          <Details
            position="Mern Stack Developer"
            company="HireQuotient"
            time="May 2024 - Present"
            address="Bangalore"
            work="At HireQuotient, I developed 60+ AI-integrated tools to drive automation and improve productivity across internal and external operations. I implemented the Strapi CMS, boosting content management and scalability for blog posts. I also built tools like a YouTube downloader and YouTube-to-MP3 converter, significantly increasing organic traffic from 40K to 800K and achieving top Google rankings. I developed an AI-powered resume builder with over 100+ customizable templates, and an AI content detection Chrome extension to enhance content transparency and streamline collaboration."
            tech="Tech: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Strapi CMS, AI-enhanced tools."
            companyLink="https://www.hirequotient.com"
            certificate="certificate"
          />
          {/* Health Umbrella Foundation Experience */}
          <Details
            position="Mern Developer"
            company="Health Umbrella Foundation"
            time="August'2022 - July'2023"
            address="Remote"
            work="As a MERN developer at Health Umbrella Foundation, I specialize in MongoDB, Express, React, and Node.js to create user-friendly web applications for the healthcare sector. I focus on improving security by addressing vulnerabilities like XSS, CSRF attacks, query injections, and DDoS attacks. Additionally, I optimize website performance using techniques such as React's useMemo, useCallback hooks, and code splitting, ensuring fast load times and smooth user experiences."
            tech="Tech: ReactJs, Tailwind CSS, Redux Toolkit, NodeJs, ExpressJs, MongoDB, REST API."
            companyLink="#"
            certificate="certificate"
          />
        </ul>
      </div>

      <h3 className="font-bold text-5xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Internship
      </h3>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-20">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* Mern Stack Developer Intern - Content Creation */}
          <Details
            position="Mern Stack Developer Intern"
            company="Content Creation"
            time="December 2023 - February 2024"
            address="Delhi"
            work="Developed a secure backend authentication system using Node.js, Express, and MongoDB, ensuring a safe login process for users. Implemented website security best practices to prevent vulnerabilities like XSS and CSRF, enhancing overall security measures. Created and maintained responsive frontend pages with React for a seamless user experience across various devices. Managed application states efficiently using Redux Toolkit, improving data flow and platform performance. Collaborated with team members to prioritize security, performance, and scalability in all development efforts."
            tech="Tech: NodeJs, ExpressJs, MongoDB, ReactJs, Redux Toolkit."
            companyLink="#"
            certificate="certificate"
          />

          {/* Frontend Developer & UI/UX Intern - LUSIP */}
          <Details
            position="Frontend Developer | UI/UX Designer"
            company="LNMIIT Undergraduate Summer Internship Program (LUSIP)"
            time="June 2022 - July 2022"
            address="Virtual"
            work="Led UI/UX design efforts using Figma, efficiently coordinating tasks and collaborating with interns to improve project delivery time by 15%. Contributed to React.js-based frontend development, optimizing page load times, and improving website performance by 25%."
            tech="Tech: Figma, HTML, CSS, JavaScript, ReactJs, Redux Toolkit, Tailwind CSS, Bootstrap."
            companyLink="https://management.ind.in/forum/lnmiit-lusip-250268.html"
            certificate="certificate"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
