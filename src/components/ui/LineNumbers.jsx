import React from "react";

const LineNumbers = ({ count = 30 }) => {
  const lines = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="text-base cursor-pointer text-gray-400 font-code flex flex-col items-end pr-2">
      {lines.map((line) => (
        <span key={line} className="">
          {line}
        </span>
      ))}
    </div>
  );
};

export default LineNumbers;
