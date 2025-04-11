import { Backpack } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import LineNumbers from "../../components/ui/LineNumbers";

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
  return (
    <div className="flex h-full w-full flex-row">
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
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="ml-5 flex h-full items-start justify-start border-l border-border shadow-shadowLeft">
        <div className="w-[45px]">
          <LineNumbers count={28} />
        </div>
        <div>
          <div className="syntaxhighlighter">
            <SyntaxHighlighter
              language="cpp"
              style={vscDarkPlus}
              showLineNumbers={false}
              customStyle={{
                background: "none",
                padding: "0px",
                paddingLeft: "20px",
                margin: "0px",
              }}
            >
              {codeMotiv}
            </SyntaxHighlighter>
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
              {codePy}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
