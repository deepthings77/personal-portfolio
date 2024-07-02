import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: " Co-founded and hosted TheSkillShow Podcast, curating a transformative platform that celebrates the extraordinary talents and expertise of individuals from various fields.",
      keywords: ["Co-founded", "TheSkillShow", ],
    },
    {
      text: "Spearheaded the creation and management of TheSkillShow Podcast, collaboratively overseeing all aspects including content creation, technical management, and video editing.",
      keywords: ["content creation", "technical management", "video editing"],
    },
    // {
    //   text: "Implemented website design and enhanced interactivity.",
    //   keywords: ["website design"],
    // },
    // {
    //   text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in ENS",
    //   keywords: ["smart contracts", "ENS"],
    // },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Co-founder<span className="text-AAsecondary"> @TheSkillShow</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">July 2022 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://youtube.com/@tss.theskillshow?si=wpyoVqsHLJ34zHhz", "_blank")}
          >
            TheSkillShow
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
