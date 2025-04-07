import { Backpack } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
// booting up portfolio...

const user = "Mustafozoda Sharifbek 👨‍💻";
const role = "Full Stack Developer";
const location = "Budapest, Hungary";

function greet(visitor) {
    console.log(\`Hey \${visitor} 👋\`);
    console.log("You're now inside the codebase of a curious mind.");
    console.log(\`Role: \${role} | Location: \${location}\`);
    console.log("Use the sidebar to explore. Just don't delete \`main()\` 😅");
}

const guest = "curious dev";
greet(guest);

// Tip: run \`contact()\` to reach the terminal wizard 🧙

`;

const Home = () => {
  return (
    <div className="w-full syntaxhighlighter  text-[15px]  h-full">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={false}
        customStyle={{
          background: "none",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Home;
