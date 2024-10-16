import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GithubIcon } from "@/components/Icon";
import Proj1 from "../../public/images/projects/proj1.png";
import Proj2 from "../../public/images/projects/portfolio.png";
import Proj3 from "../../public/images/projects/proj3.png";
import Proj4 from "../../public/images/projects/proj4.png";
import Proj5 from "../../public/images/projects/proj5.png";
import Proj6 from "../../public/images/projects/proj6.png";
import Proj7 from "../../public/images/projects/proj7.png";
import Proj8 from "../../public/images/projects/proj8.png";
import Transition from "@/components/Transition";
import resumeBuilder from "../../public/images/projects/resumeBuilder.png";
import ytmp4 from "../../public/images/projects/ytmp4.png";
import ytmp3 from "../../public/images/projects/ytmp3.png";
import resumeParser from "../../public/images/projects/resumeParser.png";
import aiDetector from "../../public/images/projects/ai-detector.png";
const FeaturedProject = ({ type, tech, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex item-center relative rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%]  xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {tech}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  hover:border-dark border-2 hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, tech, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light md:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg ">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold  lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {tech}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>SA | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="AI-powered Resume Builder"
                tech="Tech Stack: ReactJs, Tailwind CSS, Redux, NodeJs, ExpressJs, MongoDB, Rest API, OpenAI API, JWT Authentication, Bcrypt."
                img={resumeBuilder} // Assuming you have an image for this project
                summary="Developed an advanced AI-powered resume builder that streamlines the resume creation process. The tool leverages AI to suggest ATS-compliant content, including professional experiences, skills, and summaries tailored to each user. It features live preview functionality, allowing users to view updates in real-time. Additionally, the system includes a powerful resume parsing feature: users can upload an existing resume, and the tool automatically extracts key details to prefill customizable templates, significantly speeding up the resume creation process. Completed and deployed within 21 days."
                link="https://www.hirequotient.com/ai-resume-builder" // Your live link
                github="https://www.hirequotient.com/ai-resume-builder" // Your GitHub repo link
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="AI-powered Resume Parser"
                tech="Tech Stack: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Rest API, Python, JWT Authentication, Bcrypt."
                img={resumeParser} // Assuming you have an image for this project
                summary="Developed an advanced AI-powered resume parser that enables users to upload and parse resumes in bulk based on job descriptions. The system ranks resumes according to their relevance to the job description, providing detailed filtering options based on relevance and experience. Users can easily shortlist resumes, reach out to candidates directly, and download filtered results in an Excel sheet for further processing. This tool significantly streamlines the hiring process, making it easier for recruiters to find the most suitable candidates efficiently."
                link="https://www.hirequotient.com/resume-parser" // Your live link
                github="https://www.hirequotient.com/resume-parser" // Your GitHub repo link
                type="Featured project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="AI Detector Tool"
                tech="Tech Stack: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Rest API, Python, GPT-3/4 API, Chrome Extension, Telegram Bot."
                img={aiDetector} // Assuming you have an image for this project
                summary="Developed an advanced AI Detector Tool that enables users to upload files in various formats such as PNG, JPEG, DOCX, PDF, and plain text to detect AI-generated content. The tool provides detailed analysis, offering insights on content originality and authenticity. Users can generate comprehensive reports in PDF format based on the analysis. Additionally, the tool is available as a Chrome extension and Telegram bot, making it easily accessible for real-time content detection across platforms."
                link="https://www.hirequotient.com/ai-detector" // Your live link
                github="https://www.hirequotient.com/ai-detector" // Your GitHub repo link
                type="Featured project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="YouTube Video Downloader"
                tech="Tech Stack: ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB, Rest API, yt-dlp, JWT Authentication, Bcrypt."
                img={ytmp4} // Assuming you have an image for this project
                summary="Developed a highly efficient YouTube video downloader using the yt-dlp package and the MERN stack. This tool enables users to download videos in various formats and qualities directly from YouTube, with an intuitive and user-friendly interface. By implementing this feature on HireQuotient's platform, organic traffic skyrocketed from 40K to 800K monthly visitors, significantly enhancing user engagement. The tool currently ranks #5 on Google for relevant search queries, contributing to its success and visibility. The downloader's integration improved site performance, security, and scalability, making it a key driver of growth for the company."
                link="https://www.hirequotient.com/youtube-video-downloader" // Your live link
                github="https://www.hirequotient.com/youtube-video-downloader" // Your GitHub repo link
                type="Featured project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="College Outpass"
                tech="Tech Stack: ReactJs, Tailwind Css, Redux, NodeJs, ExpressJs, MongoDb, Rest Api, NodeMailer, Multer, JWT Authentication, Bcrypt."
                img={Proj1}
                summary=" Developed a full-stack college outpass system using the MERN stack. The system allows students to request permission to leave campus and includes features such as user authentication, permission requests, and approval notifications."
                link="https://outpass-ak4jpklzm-suyash-agraharis-projects.vercel.app/"
                github="https://github.com/suyashagrahari/Outpass"
                type="Featured project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="GossipGalaxy"
                tech="Tech Stack: ReactJs, NodeJs, ExpressJs, MongoDB, REST API, Socket.io, WebSocket"
                img={Proj7}
                summary="A chat app built with the MERN stack and Socket.IO offers a seamless real-time messaging experience. The React frontend provides a user-friendly interface, while the Node.js/Express backend handles server-side operations and WebSocket connections using Socket.IO. MongoDB stores user and message data. With Socket.IO, messages are delivered instantly without page refreshes, ensuring a responsive chat environment. "
                link="https://gossip-galaxy-six.vercel.app/"
                github="https://github.com/suyashagrahari/GossipGalaxy"
                type="Featured project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="Health Websites"
                img={Proj5}
                tech="Tech Stack:  ReactJs, Tailwind CSS, Redux Toolkit, NodeJs, ExpressJs, MongoDB, REST API"
                summary="Health Umbrella Foundation provides comprehensive resources on holistic therapies, empowering individuals to find the best treatment for their well-being, supported by testimonials from satisfied recipients."
                link="https://github.com/suyashagrahari/Health_Websites/"
                github="https://github.com/suyashagrahari/Health_Websites"
                type="Featured project"
              />
            </div>

            <div className="col-span-12 md:col-span-12">
              <FeaturedProject
                title="This Portfolio"
                tech="Tech Stack: JavaScript, NextJS, TailwindCSS, Framer Motion"
                img={Proj2}
                link="https://portfolio-website-mu-fawn-27.vercel.app/"
                summary="A Portfolio to showcase my projects."
                github="https://github.com/suyashagrahari/Portfolio-website"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 md:col-span-12">
              <FeaturedProject
                title="Tongue-Twist"
                img={Proj8}
                tech="Tech Stack: TypeScript, ReactJs, Material Ui, Redux Toolkit, REST API"
                summary="Tongue-Twist is a language learning app with cutting-edge text-to-speech capability. Users become immersed in language through audio-based learning, which is followed by interactive examinations to determine mastery. Tongue-Twist makes it easy for users to learn new languages and track their skills."
                link="https://tongue-twist.vercel.app/"
                github="https://github.com/suyashagrahari/TongueTwist/tree/main"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Weather Mate"
                tech="Tech Stack: React.js, Tailwind CSS, API"
                img={Proj3}
                summary="
                In this project, I developed a weather website using ReactJS for the front-end, Axios for making API calls to fetch weather data, and Tailwind CSS for styling the user interface with a modern and responsive design."
                link="https://wheatherappbysuyash.netlify.app/"
                github="https://wheatherappbysuyash.netlify.app/"
                type="Featured project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="QuoteSparkle"
                img={Proj4}
                tech="Tech Stack: React.js, Tailwind CSS, API"
                summary="In this quotes generation website, I utilized ReactJS for building dynamic components, Axios for making API calls to fetch quotes data, and Tailwind CSS for styling the user interface with a modern and responsive design that adapts seamlessly across various devices."
                link="https://quotesgenerator-by-suyash.netlify.app/"
                github="https://quotesgenerator-by-suyash.netlify.app/"
                type="Featured project"
              />
            </div>

            <div className="col-span-12 md:col-span-12">
              <FeaturedProject
                title="GridPulse"
                img={Proj6}
                tech="Tech Stack: ReactJs, Tailwind CSS, Redux Toolkit, NodeJs, ExpressJs, MongoDB, REST API"
                summary="Blockchain energy trading transforms energy markets, offering
                efficiency and sustainability. It simplifies energy
                transactions, empowering users to contribute to a cleaner,
                decentralized energy future."
                link="https://github.com/suyashagrahari/Energy-trading-webapp"
                github="https://github.com/suyashagrahari/Energy-trading-webapp"
                type="Featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
