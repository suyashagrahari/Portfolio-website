import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full  bottom-0 h-10 mt-20 border-t-2 border-solid border-dark font-medium text-md dark:text-light dark:border-light sm:text-base">
      <Layout className="flex items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
