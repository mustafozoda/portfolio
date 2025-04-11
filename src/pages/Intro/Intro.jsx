import React from "react";
import useTerminalStore from "../../store/useTerminalStore";
import Terminal from "../../components/ui/Terminal";
import photo from "../../assets/me-photo.jpg";

const Intro = () => {
  const isTerminalOpen = useTerminalStore((state) => state.isTerminalOpen);
  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal);

  return (
    <div className="flex h-full w-full flex-col">
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="flex max-w-[700px] flex-col items-center text-center font-code text-zinc-300">
          {/* Photo */}
          <div className="mb-6 w-[25%]">
            <img
              className="rounded-full border-2 border-green-400 shadow-md"
              src={photo}
              alt="developer portrait"
            />
          </div>

          {/* Title */}
          <h1 className="mb-3 text-3xl font-bold text-green-400 sm:text-4xl">
            Hey there, I’m Sharifbek
          </h1>

          {/* Intro Message */}
          <p className="mb-6 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
            Welcome to my interactive portfolio.
            <br />
            Inspired by how I work daily — inside an editor. I designed this
            space to feel like exploring a live codebase.
            <br />
            Every file you open reveals part of my journey as a developer.
          </p>

          {/* Guide */}
          <p className="mb-5 text-sm text-zinc-400 sm:text-base">
            <span className="text-green-400">Start your session:</span>
            <br />↳ Open the terminal from the{" "}
            <span className="text-white">top-right</span> corner
            <br />↳ Type <code className="font-mono text-green-400">
              start
            </code>{" "}
            or hit the <span className="text-white">▶️ Run</span> button
          </p>

          {/* Optional CTA */}
          <button
            onClick={toggleTerminal}
            className="mt-2 rounded-lg border border-green-400 px-4 py-1 text-sm text-green-300 transition hover:bg-green-500 hover:text-black"
          >
            Open Terminal
          </button>
        </div>
      </div>

      {/* Terminal Area */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isTerminalOpen ? "h-[20%]" : "h-0"
        } w-full border-t border-border bg-dark`}
      >
        <Terminal />
      </div>
    </div>
  );
};

export default Intro;
