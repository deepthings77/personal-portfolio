import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

export default function TrouveTavoie() {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 text-lg font-mono">
            Software Engineer <span className="text-AAsecondary">@ Blockchain</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mars - August 2022</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Spearhead & implemented a new design user workflow system for the Frond-End Architecture of a{" "}
              <span className="text-AAsecondary">NFT Marketplace</span>.
            </span>
          </div>
          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Work with a variety of different languages, platforms, frameworks, and content management systems such as
              JavaScript, TypeScript, <span className="text-AAsecondary">Next.js/React</span> ,
              <span className="text-AAsecondary">AWS</span> and <span className="text-AAsecondary">Vercel</span>.
            </span>
          </div>
          {/* Desctiption 3 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Interfaced with developers on a daily basis, providing technological expertise.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}