import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import useTabStore from "../../store/useTabStore";

const TreeNodeUI = ({ node, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children?.length > 0;
  const paddingLeft = level * 12;

  return (
    <div style={{ paddingLeft }} className="truncate">
      <div
        onClick={() => hasChildren && setExpanded(!expanded)}
        className="cursor-pointer tracking-widest py-1 font-medium flex items-center gap-1"
      >
        <span className="w-4 ">
          {hasChildren &&
            (expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </span>

        <span className="w-4 ">
          {hasChildren ? (
            expanded ? (
              <FaFolderOpen color="#FBC02D" />
            ) : (
              <FaFolder color="#FBC02D" />
            )
          ) : (
            node.icon
          )}
        </span>

        {node.to ? (
          <Link
            to={node.to}
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
        <div className="ml-2 w-full  border-l border-gray-700">
          {node.children.map((child, index) => (
            <div className="" key={index}>
              {child.to ? (
                <Link
                  to={child.to}
                  className="hover:bg-gray-700 px-2 py-[2px] text-sm flex items-center gap-2"
                  style={{ paddingLeft: (level + 1) * 12 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    useTabStore.getState().openTab(child.label, child.to);
                  }}
                >
                  <span>{child.icon}</span>
                  <span className="truncate">{child.label}</span>
                </Link>
              ) : (
                <TreeNodeUI node={child} level={level + 1} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeUI;
