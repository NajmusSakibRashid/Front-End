"use client";

import React from "react";
import LayoutMain from "@/app/components/layout/LayoutMain";
import Navbar from "@/app/components/navbar";
import LeftLayout from "./sidebar-community";
import RightLayout from "@/app/components/communities/community-suggestions";
import MyCommunities from "./my-communities";
import ManagedByMe from "./managed-by-me";

const Page = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 top-0 hidden w-1/5 p-5 md:mt-20 lg:flex">
        <LeftLayout />
      </div>
      <div className="min-h-screen w-full p-5 pb-5 pt-0 md:w-4/5 md:p-5 lg:mx-auto lg:w-3/5">
        <h1 className="text-4xl font-bold ml-3 mb-3">Your Communities</h1>
        <MyCommunities />

        <br />
        <div className="flex flex-col w-full">
          <div className="divider"></div>
        </div>
        <h1 className="text-4xl font-bold ml-3 mb-4">Managed by You</h1>
        <ManagedByMe />
      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden w-1/5 p-5 md:mt-20 md:flex overflow-auto scroll-smooth">
        bye
      </div>
    </div>
  );
};

export default Page;