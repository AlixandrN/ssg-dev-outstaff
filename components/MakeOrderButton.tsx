"use client";
import React, { useEffect } from "react";

export const MakeOrderButton = () => {
  useEffect(() => {
    console.log("effect");
  }, []);
  return (
    <button
      className="btn btn-xs btn-secondary"
      onClick={() => console.log("%%%Click MakeOrder%%%")}
    >
      ***MakeOrder***
    </button>
  );
};
