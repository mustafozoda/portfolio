import React, { useState, useEffect } from "react";
import { FaTerminal } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useTerminalStore from "../../store/useTerminalStore";
import { FaXmark } from "react-icons/fa6";
const ProgressBar = ({ delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => {
      let value = 0;
      const interval = setInterval(() => {
        value += 1;
        if (value >= 100) {
          clearInterval(interval);
        }
        setProgress(value);
      }, 20);
    }, delay);
    return () => clearTimeout(start);
  }, [delay]);

  return (
    <div className="my-2 w-full">
      <div className="h-1 w-full overflow-hidden bg-red-500">
        <div
          className="h-full bg-green-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [progressCount, setProgressCount] = useState(0);

  const navigate = useNavigate();
  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal);
  const shouldAutoRun = useTerminalStore((state) => state.shouldAutoRun);
  const clearAutoRun = useTerminalStore((state) => state.clearAutoRun);

  const runSequence = () => {
    setCommand("");
    setOutput(["Launching Home.jsx..."]);
    setTimeout(() => {
      setShowProgress(true);
      setTimeout(() => setProgressCount(1), 0);
      setTimeout(() => setProgressCount(2), 2000);
      setTimeout(() => {
        setShowProgress(false);
        setTimeout(() => {
          setOutput((prev) => [...prev, "✔ Portfolio loaded successfully."]);
          setTimeout(() => {
            setOutput((prev) => [...prev, "Redirecting..."]);
            setTimeout(() => {
              toggleTerminal(false);
              navigate("/home");
            }, 2000);
          }, 2000);
        });
      }, 4000);
    }, 2000);
  };

  useEffect(() => {
    if (shouldAutoRun) {
      runSequence();
      clearAutoRun();
    }
  }, [shouldAutoRun]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = command.trim().toLowerCase();
      if (trimmed === "start") {
        runSequence();
      } else {
        setOutput([`Command not recognized: ${command}`]);
        setCommand("");
      }
    }
  };

  return (
    <div className="flex h-full w-[100%] flex-col overflow-y-hidden p-[5px] px-5 font-code text-gray-400">
      <div className="items-top flex h-[15%] w-[100%] justify-between overflow-y-hidden">
        <div className="flex w-fit items-center justify-start gap-2 border-b border-border text-[12px]">
          <span>Terminal</span>
          <FaTerminal />
        </div>
        <div className="flex items-center justify-end">
          <FaXmark
            onClick={toggleTerminal}
            className="cursor-pointer"
            color="gray"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-1 text-[15px]">
        <span className="flex items-center justify-center">
          mustaffozoda:\portfolio
          <IoIosArrowForward />
        </span>
        <input
          placeholder="Type 'start' and press Enter"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-[35px] border-none bg-dark p-0 outline-none ring-0 placeholder:text-[12px] placeholder:text-zinc-500 focus:outline-none focus:ring-0"
          type="text"
        />
      </div>

      <div className="space-y-1 font-code text-[13px]">
        {output.map((line, index) => (
          <div
            key={index}
            className={`${
              line.toLowerCase().startsWith("command not recognized")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {line}
          </div>
        ))}
      </div>

      <div className="w-[200px]">
        {showProgress &&
          [...Array(progressCount)].map((_, i) => (
            <ProgressBar key={i} delay={0} />
          ))}
      </div>
    </div>
  );
};

export default Terminal;
