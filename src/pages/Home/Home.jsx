import { Backpack } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import LineNumbers from "../../components/ui/LineNumbers";
import { getBreadcrumb } from "../../components/logic/layout/tabUtils";

const codeString = `
// importing portfolio core module...
import { Portfolio } from "mustafozoda-sharifbek";

// booting up portfolio...

const user = "Mustafozoda Sharifbek 👨‍💻";
const role = "Full Stack Developer";
const location = "Budapest, Hungary";

function greet(visitor) {
    console.log(\`Hey \${visitor} 👋\`);
    console.log("You're now inside the codebase of a curious mind.");
    console.log(\`Role: \${role} | Location: \${location}\`);
    console.log("Use the sidebar to explore.");
}

const guest = "curious dev";
greet(guest);

// Tip: run contact() to reach the terminal wizard 🧙
`;

const codeMotiv = `
// --- switching to C++ mode ---

#include <Portfolio>
using namespace std;

int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}

// --- switching to Python mode ---
`;

const codePy = `
# life is like coding...
for day in range(life):
    learn()
    build()
    repeat()

# progress > perfection
`;
const Home = () => {
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
              {codeString}
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
              language="cpp"
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
              {codeMotiv}
            </SyntaxHighlighter>
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
              {codePy}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
