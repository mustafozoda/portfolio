import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import LineNumbers from "../../../components/ui/LineNumbers";

const mscCode = `
// Loading academic credentials...
const university = "Eötvös Loránd University (ELTE)";
const degree = "MSc in Computer Science – Digital Factory";
const location = "Budapest, Hungary";
const expectedGrad = "June 2026";

// Areas of focus
const subjects = [
  "Web Programming",
  "Machine Learning",
  "ERP Systems",
  "Artificial Intelligence",
  "Operating Systems",
  "Databases",
  "Algorithms"
];

// current status
const student = {
  name: "Mustafozoda Sharifbek",
  studying: true,
  thesis: "in progress...",
};
`;

const bscCode = `
# Tajik National University 🇹🇯
university = "TNU - Tajik National University"
degree = "Bachelor in Computer Science"
location = "Dushanbe, Tajikistan"
graduation = "June 2023"

# Additional course
course = "Advanced Software Development - Softclub"

skills_gained = [
    "Software Engineering",
    "Problem Solving",
    "Team Projects",
    "Fundamentals of CS"
]

# always learning, always building 
# “Stay hungry, stay foolish.” – Steve Jobs

if degree == "complete":
    print("Level up! 🎓")

# — written by a curious mind: Mustafozoda Sharifbek 👨‍💻
`;

const Msc = () => {
  return (
    <div className="w-full flex flex-row h-full">
      {/* Left: MSc (JavaScript style) */}
      <div className="syntaxhighlighter">
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={false}
          customStyle={{
            background: "none",
            padding: "0px",
            paddingLeft: "20px",
            margin: "0px",
          }}
        >
          {mscCode}
        </SyntaxHighlighter>
      </div>

      {/* Right: BSc (Python style) */}
      <div className="border-l border-border ml-5 shadow-shadowLeft flex justify-start items-start h-full">
        <div className="w-[45px]">
          <LineNumbers count={28} />
        </div>
        <div className="syntaxhighlighter">
          <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            showLineNumbers={false}
            customStyle={{
              background: "none",
              padding: "0px",
              paddingLeft: "20px",
              margin: "0px",
            }}
          >
            {bscCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Msc;
