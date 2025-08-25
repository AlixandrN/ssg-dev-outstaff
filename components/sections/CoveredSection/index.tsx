import React from "react";
import { CoveredColumn } from "./CoveredColumn";

export type TCovered = "javaScript" | "typeScript" | "react" | "node" | "check";

export const CoveredSection = () => {
  return (
    <div className="text-primary-content bg-info-content p-4 rounded-2xl text-2xl w-full md:w-[80vw] mx-auto">
      <p>We’ve got you covered</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <CoveredColumn
          columnTitle="Frontend"
          list={["javaScript", "typeScript", "react"]}
        />
        <CoveredColumn
          columnTitle="Frontend"
          list={["javaScript", "typeScript", "react"]}
        />
        <CoveredColumn
          columnTitle="Frontend"
          list={[
            "javaScript",
            "typeScript",
            "react",
            "javaScript",
            "typeScript",
            "react",
          ]}
        />
        <CoveredColumn
          columnTitle="Frontend"
          list={["javaScript", "typeScript", "react"]}
        />
      </div>
    </div>
  );
};
