import React from "react";
// 'use client';

const ScheduleButton = ({content}) => {
  return (
    <div>
      <button
        className="btn btn-accent w-32 self-center"
        onClick={() => {
          window.location.href = "";
        }}
      >
        Schedule
      </button>
    </div>
  );
};

export default ScheduleButton;