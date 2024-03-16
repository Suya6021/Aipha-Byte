'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const RoleAssignment = () => {};

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className=" flex justify-center items-center flex-col bg-white w-[300px]">
        <Image
          src="/Aspira.svg"
          alt="Aspira logo"
          width={210}
          height={210}
        ></Image>
        <p className="text-muted-foreground tracking-tighter text-sm">
          #1 Best Job recommdending Site
        </p>
      </div>
      <div className="flex gap-5 justify-around w-full mt-10">
        <div className=" bg-white p-8">
          <div>
            <h2 className="text-3xl font-bold p-3 pb-0 ">
              Best jobs relevant to your Resume!
            </h2>
            <p className="text-[#7D7D7D] text-[10px] font-normal p-2 bg-neutral-200 w-fit rounded-lg ml-4">
              Trusted by 10,000+ job applicants
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold p-3">
              See your best job in 3 simple steps :
            </h4>

            <p className=" ml-6 text-muted-foreground px-2">
              {" "}
              Step 1 : Upload your resume
            </p>
            <p className=" ml-6 text-muted-foreground px-2">
              Step 2 : Verify your details
            </p>
            <p className=" ml-6 text-muted-foreground px-2">
              Step 3 : Know where you are more likely to get hired
            </p>
          </div>
          <div className="mt-8">
            <Button variant={"ghost"}>How it works</Button>
            <Button
              onClick={() => {
                RoleAssignment();
                router.push("/applicant/step-1");
              }}
            >
              Start Now
            </Button>
          </div>
        </div>
        <div className=" bg-white p-8">
          <div>
            <h2 className="text-3xl font-bold p-3 pb-0 ">
              Create your dream team now!
            </h2>
            <p className="text-[#7D7D7D] text-[10px] font-normal p-2 bg-neutral-200 w-fit rounded-lg ml-4">
              Trusted by 10,000+ job applicants
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold p-3 tracking-tighter">
              Get to know your best potential candidate in 3 simple steps :
            </h4>

            <p className=" ml-6 text-muted-foreground px-2">
              Step 1 : Register your company
            </p>
            <p className=" ml-6 text-muted-foreground px-2">
              Step 2 : Add required job details
            </p>
            <p className=" ml-6 text-muted-foreground px-2">
              Step 3 : Get the best profiles resume matching your job
              description
            </p>
          </div>
          <div className="mt-8">
            <Button variant={"ghost"}>How it works</Button>
            <Button
             onClick={() => {
              RoleAssignment();
              router.push("/recruiter/step-1");
            }}>Start Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
