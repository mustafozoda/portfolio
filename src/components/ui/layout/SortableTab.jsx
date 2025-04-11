import { LuX } from "react-icons/lu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableTab = ({ tab, activeTab, setActiveTab, closeTab, navigate }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: tab.path });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onClick={() => {
        setActiveTab(tab.path);
        navigate(tab.path);
      }}
      className={`flex min-w-12 cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border px-3 py-1 font-code ${
        activeTab === tab.path
          ? "rounded-none border-0 border-x border-border bg-dark2 font-bold hover:bg-dark"
          : "border-none bg-dark text-gray-400 hover:bg-dark2"
      }`}
    >
      {tab.name}
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeTab(tab.path);
        }}
        className="rounded-[5px] p-1 hover:bg-dark"
      >
        <LuX />
      </button>
    </div>
  );
};

export default SortableTab;
