import TreeNodeUI from "./TreeNodeUI";
import treeData from "../logic/treeData";

const SidebarUI = () => {
  return (
    <div className="p-4 text-gray-300 text-sm font-code select-none">
      <div className="text-xs text-gray-400 mb-2 tracking-widest">EXPLORER</div>
      {treeData.map((node, index) => (
        <TreeNodeUI node={node} key={index} />
      ))}
    </div>
  );
};

export default SidebarUI;
