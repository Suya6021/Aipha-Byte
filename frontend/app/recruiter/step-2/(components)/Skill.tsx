"use client";
import { Dispatch, SetStateAction, useState } from "react";

export default function Skill({
  skill,
  setSkills,
  skills,
}: {
  skill: string;
  setSkills: Dispatch<SetStateAction<string[]>>;
  skills: Array<string>;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-fit py-1 px-3 rounded-2xl bg-white border border-black cursor-pointer"
      onClick={() => {
        setSkills(skills.filter((s) => s !== skill));
        setIsHovered(false);
      }}
    >
      {isHovered ? "remove" : skill}
    </div>
  );
}
