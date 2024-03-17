import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import SkillsDisplay from "./SkillsDisplay";
import { LuDot } from "react-icons/lu";
import CircleMeter from "./Match";
const User = {
  skills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
};

const UserView = () => {
  return (
    <>
      <div className="flex justify-between bg-white m-2 mx-96 rounded-md">
        <div className=" w-[450px] m-2 ml-6">
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="p-2 text-lg font-bold pb-0">Vinnet Babar</h3>
              <p className="flex justify-center items-center text-muted-foreground text-lg p-2 pt-0">
                {" "}
                Pune <LuDot /> MIT-ADT
              </p>
            </div>
            <FaRegBookmark />
          </div>
          <div className="flex gap-6 mt-3 p-2 font-[400] ">
            <div className="rounded-md bg-neutral-200/60 p-[6px] border-black border-[1px]">Exp:7 yrs</div>
            <div className="rounded-md bg-neutral-200/60 p-[6px] border-black border-[1px]">Domain</div>
            <div className="rounded-md bg-neutral-200/60 p-[6px] border-black border-[1px]"> Speciality</div>
          </div>
          <div className="flex flex-wrap m-2 gap-3">
            <SkillsDisplay skills={User.skills} />
          </div>
        </div>
        <div className="flex justify-center items-center mr-10">
          <CircleMeter  size={110} percentage={90} label="Match"/>
        </div>
      </div>
    </>
  );
};

export default UserView;
