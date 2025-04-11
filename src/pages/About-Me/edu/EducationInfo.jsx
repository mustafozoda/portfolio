import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import LineNumbers from "../../../components/ui/LineNumbers";
import { getBreadcrumb } from "../../../components/logic/layout/tabUtils";

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

const EducationInfo = () => {
  const breadcrumb = getBreadcrumb(location.pathname);
  return (
    <div className="flex h-full w-[100%]">
      <div className="h-full w-[50%]">
        <div className="flex h-[3%] items-center justify-start px-5 font-code text-xs text-gray-400">
          mustafozoda {">"} {breadcrumb}
        </div>
        <div className="syntaxhighlighter flex h-[97%] w-[100%] overflow-x-auto overflow-y-hidden">
          <div className="min-w-[50px] border-r border-border">
            <LineNumbers count={28} />
          </div>
          <div className="w-[100%]">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              showLineNumbers={false}
              customStyle={{
                background: "none",
                padding: "0px",
                paddingLeft: "20px",
                margin: "0px",
                overflow: "unset",
                width: "100%",
              }}
            >
              {mscCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] border-l border-border">
        <div className="flex h-[3%] items-center justify-start px-5 font-code text-xs text-gray-400">
          mustafozoda {">"} {breadcrumb}
        </div>
        <div className="syntaxhighlighter flex h-[97%] w-[100%] overflow-x-auto overflow-y-hidden">
          <div className="min-w-[50px] border-r border-border">
            <LineNumbers count={28} />
          </div>
          <div className="w-[100%]">
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              showLineNumbers={false}
              customStyle={{
                background: "none",
                padding: "0px",
                paddingLeft: "20px",
                margin: "0px",
                overflow: "unset",
                width: "100%",
              }}
            >
              {bscCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
