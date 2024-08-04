"use client";

import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleMetertypes {
  heading: string;
  percentage: number;
  textValue: string;
}

export default function CircleMeter({
  heading,
  percentage,
  textValue,
}: CircleMetertypes) {
  return (
    <div className="my-4 min-h-[250px] w-[250px] text-center">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={1}
        text={`${textValue}`}
        styles={buildStyles({
          pathColor: "rgb(249 115 22 / 1)",
          trailColor: "#ffff",
          textColor: "#838383",
        })}
      >
        <div style={{ width: "90%" }}>
          <CircularProgressbar
            value={100}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: "#efefef",
            })}
          />
        </div>
      </CircularProgressbarWithChildren>
      <h3 className="pt-3 text-[17px] font-semibold uppercase text-gray-800 transition-all hover:cursor-pointer hover:text-orange-500 md:pt-6">
        {heading}
      </h3>
    </div>
  );
}
