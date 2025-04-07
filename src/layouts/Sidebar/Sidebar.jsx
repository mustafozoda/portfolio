import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import useTabStore from "../../store/useTabStore";

import {
  ChevronRight,
  ChevronDown,
  Folder,
  FileText,
  FileCode,
  FileJson,
  FileSpreadsheet,
  File,
  FileSearch,
  FileType,
} from "lucide-react";

const getFileIcon = (label) => {
  if (label.endsWith(".js") || label.endsWith(".jsx"))
    return <FileCode size={16} />;
  if (label.endsWith(".ts") || label.endsWith(".tsx"))
    return <FileCode size={16} />;
  if (label.endsWith(".json")) return <FileJson size={16} />;
  if (label.endsWith(".md")) return <FileText size={16} />;
  if (label.endsWith(".pdf")) return <FileSearch size={16} />;
  return <File size={16} />;
};

const treeData = [
  {
    label: "_about-me_",
    to: "/about",
    children: [
      {
        label: "Bio",
        children: [
          { label: "Where I'm From", to: "/about/bio/where-im-from" },
          { label: "Where I Live", to: "/about/bio/where-i-live" },
        ],
      },
      {
        label: "Education",
        children: [
          { label: "High School", to: "/about/edu/highschool" },
          { label: "University", to: "/about/edu/university" },
        ],
      },
      {
        label: "Interests",
        children: [
          { label: "Hobbies", to: "/about/interests/hobbies" },
          { label: "Tools I Like", to: "/about/interests/tools" },
        ],
      },
    ],
  },
  {
    label: "_projects_",
    to: "/projects",
    children: [
      { label: "portfolio-site.jsx", to: "/projects/portfolio" },
      { label: "weather-app.js", to: "/projects/weather" },
      { label: "task-manager.ts", to: "/projects/task-manager" },
    ],
  },
  {
    label: "_skills_",
    children: [
      { label: "Languages.js", to: "/skills/languages" },
      { label: "Frameworks.js", to: "/skills/frameworks" },
      { label: "Tools.md", to: "/skills/tools" },
    ],
  },
  {
    label: "_experience_",
    children: [
      {
        label: "jobs",
        children: [
          {
            label: "FrontendDev_2022-24.md",
            to: "/experience/jobs/frontend",
          },
          {
            label: "Intern_2021.md",
            to: "/experience/jobs/intern",
          },
        ],
      },
      {
        label: "Freelance.md",
        to: "/experience/freelance",
      },
    ],
  },
  {
    label: "_contact_",
    children: [
      { label: "email.js", to: "/contact/email" },
      { label: "socials.tsx", to: "/contact/socials" },
      { label: "resume.pdf", to: "/contact/resume" },
    ],
  },
];

const TreeNode = ({ node, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children?.length > 0;

  const paddingLeft = level * 16;

  return (
    <div style={{ paddingLeft }} className="truncate ">
      <div
        onClick={() => hasChildren && setExpanded(!expanded)}
        className="cursor-pointer tracking-widest py-1  font-medium flex items-center gap-1"
      >
        <span className="w-4">
          {hasChildren ? (
            expanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )
          ) : null}
        </span>

        <span className="w-4">
          {hasChildren ? (
            expanded ? (
              <FaFolderOpen color="#FFFF00" />
            ) : (
              <FaFolder color="#FFFF00" />
            )
          ) : (
            getFileIcon(node.label)
          )}
        </span>

        {node.to ? (
          <Link
            to={node.to}
            className=""
            onClick={(e) => {
              e.stopPropagation();
              useTabStore.getState().openTab(node.label, node.to);
            }}
          >
            {node.label}
          </Link>
        ) : (
          node.label
        )}
      </div>

      {expanded && hasChildren && (
        <div className="ml-2 border-l border-gray-700">
          {node.children.map((child, index) => (
            <div key={index}>
              {child.to ? (
                <Link
                  to={child.to}
                  className="hover:bg-gray-700 px-2 py-[2px] text-sm flex items-center gap-2"
                  style={{ paddingLeft: (level + 1) * 10 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    useTabStore.getState().openTab(child.label, child.to);
                  }}
                >
                  <span>{getFileIcon(child.label)}</span>
                  <span>{child.label}</span>
                </Link>
              ) : (
                <TreeNode node={child} level={level + 1} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="p-4 text-white text-sm font-code select-none">
      <div className="text-xs text-gray-400 mb-2 tracking-widest">EXPLORER</div>
      {treeData.map((node, index) => (
        <TreeNode node={node} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
