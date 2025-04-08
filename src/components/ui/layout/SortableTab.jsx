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
      className={`flex justify-center border-border font-code min-w-12 items-center gap-2  px-3 py-1 border rounded-[8px] cursor-pointer ${
        activeTab === tab.path
          ? "bg-dark2 hover:bg-dark border-x rounded-none border-border border-0 font-bold"
          : "bg-dark border-none hover:bg-dark2 text-gray-400"
      }`}
    >
      {tab.name}
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeTab(tab.path);
        }}
        className="rounded-[5px] hover:bg-dark p-1"
      >
        <LuX />
      </button>
    </div>
  );
};

export default SortableTab;
