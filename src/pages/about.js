import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "../../public/images/profile/profile3.png";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";
const about = () => {
  return (
    <>
      <Head>
        <title>SA | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mb-10">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                About me
              </h2>
              {/* <p className=" font-medium"> Hi, I am Suyash.</p> */}
              <p className=" font-medium">
                Hi, I&apos;m Suyash, a dedicated Full Stack Developer with a
                strong foundation in both frontend and backend technologies. I
                specialize in creating seamless, scalable web applications using
                modern frameworks and technologies. My frontend expertise
                includes HTML, CSS, JavaScript, React, Redux Toolkit,
                TypeScript, Bootstrap, and Tailwind CSS, enabling me to design
                responsive and user-friendly interfaces.
                <br />
                <br />
                On the backend, I work with Node.js, Express.js, REST APIs,
                GraphQL, and databases like MongoDB, SQL, and PostgreSQL.
                I&apos;m also well-versed in database sharding and replication
                to ensure optimized performance and reliability at scale.
                <br />
                <br />I have hands-on experience in developing AI-enhanced
                tools, including AI-powered resume builders and content
                detectors, leveraging GPT-3/4. My proficiency extends to CMS
                platforms such as Strapi, along with version control using
                Git/GitHub.
                <br />
                <br />
                In terms of deployment and cloud infrastructure, I manage
                scalable applications using Docker, Kubernetes, Jenkins CI/CD,
                AWS services (EC2, Lambda, S3), and optimize server performance
                with Redis, Nginx, and Kafka. I build robust, high-performance
                systems with frameworks like Next.js, Angular, and React Native,
                ensuring they meet the growing demands of modern applications.
                <br />
                <br />
                I’m driven by a passion for innovative problem-solving, whether
                it&apos;s optimizing web performance or designing solutions that
                can scale effortlessly.
              </p>
              <p className=" font-medium my-3">
                I can help you build your next dream project.
                <br />
                Let&#39;s connect.
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-3 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={Profile}
                alt="image"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <Experience />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
