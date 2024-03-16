"use client";
import { ChangeEvent, useState } from "react";
import { TiPlus } from "react-icons/ti";
import Skill from "./(components)/Skill";

export default function RecStep2() {
  const [skills, setSkills] = useState<Array<string>>([]);
  const [skillName, setSkillName] = useState<string>("");
  const [rows, setRows] = useState<number>(1);
  const [rows2, setRows2] = useState<number>(1);
  const [jobDes, setJobDes] = useState<string>("");
  const [jobRes, setJobRes] = useState<string>("");

  const handleTextAreaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJobDes(e.target.value);

    if (e.target.scrollHeight <= 64 || jobDes.length <= 29) setRows(1);
    else if (e.target.scrollHeight === 88 || jobDes.length <= 58) setRows(2);
    else if (e.target.scrollHeight === 112 || jobDes.length <= 87) setRows(3);
    else if (e.target.scrollHeight === 136 || jobDes.length <= 116) setRows(4);
    else if (e.target.scrollHeight >= 160 || jobDes.length >= 145) setRows(5);
  };

  const handleTextAreaInputRes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJobRes(e.target.value);

    if (e.target.scrollHeight <= 64 || jobRes.length <= 29) setRows2(1);
    else if (e.target.scrollHeight === 88 || jobRes.length <= 58) setRows2(2);
    else if (e.target.scrollHeight === 112 || jobRes.length <= 87) setRows2(3);
    else if (e.target.scrollHeight === 136 || jobRes.length <= 116) setRows2(4);
    else if (e.target.scrollHeight >= 160 || jobRes.length >= 145) setRows2(5);
  };

  return (
    <main className="grid place-items-center min-h-screen">
      <div className="wrapper bg-white shadow-md rounded-md p-10 flex flex-col gap-8 w-[40%]">
        <div className="Header text-center text-black font-semibold text-2xl flex flex-col gap-1">
          <h3>Step-2</h3>
          <h1 className="text-sm font-medium">Create a Job</h1>
        </div>
        <div className="main-hero flex flex-col gap-4 p-6 items-center bg-[#f4f4f4] rounded-xl">
          <form className="flex flex-col p-2 gap-4 rounded-xl text-black bg-inherit w-full">
            <div className="text-lg font-semibold">
              <h1>Enter Job Details</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 place-content-stretch gap-y-3 gap-x-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Role</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Location</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Job Position</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Salary</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Min. Qualification</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Experience</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Job Type</h3>
                <input type="text" className="px-4 py-1 rounded-md" />
              </div>
            </div>
          </form>
        </div>
        <div className="main-hero flex flex-col gap-4 p-6 items-center bg-[#f4f4f4] rounded-xl">
          <div className="flex flex-col p-2 gap-4 rounded-xl text-black bg-inherit w-full">
            <div className="text-lg font-semibold">
              <h1>Add Required Skills</h1>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <input
                value={skillName}
                type="text"
                className="rounded-md px-2 py-1"
                onChange={(e) => {
                  setSkillName(e.target.value);
                }}
              />
              <TiPlus
                size={22}
                className="cursor-pointer"
                onClick={(e) => {
                  if (skillName.length > 0) {
                    const skillExists = skills.some(
                      (skill) => skillName === skill
                    );

                    if (skillExists) {
                      alert("Skill already exists");
                      return;
                    }

                    setSkills([...skills, skillName]);
                    setSkillName("");
                  }
                }}
              />
            </div>
            <div className="py-2 flex gap-2 font-medium flex-wrap">
              {skills.map((s, i) => (
                <Skill
                  key={i}
                  skills={skills}
                  skill={s}
                  setSkills={setSkills}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="main-hero flex flex-col gap-4 p-6 items-center bg-[#f4f4f4] rounded-xl">
          <div className="flex flex-col p-2 gap-6 rounded-xl text-black bg-inherit w-full">
            <div className="text-lg font-semibold">
              <h1>Job Description</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">About Job Role</h3>
                <textarea
                  value={jobDes}
                  rows={rows}
                  onChange={handleTextAreaInput}
                  className="text-base py-1 px-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">
                  Job Responsibilities
                </h3>
                <textarea
                  value={jobRes}
                  rows={rows2}
                  onChange={handleTextAreaInputRes}
                  className="text-base py-1 px-4 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md bg-black text-white text-center py-2 hover:cursor-pointer font-semibold">
          <button
          // onClick={() => {
          //   uploadPdf();
          //   router.push("applicant/step-2");
          // }}
          >
            View best profiles for this job
          </button>
        </div>
      </div>
    </main>
  );
}
