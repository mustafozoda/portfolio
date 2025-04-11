import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useSidebarStore from "../../store/useSidebarStore";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";
import useTabStore from "../../store/useTabStore";
import SortableTab from "../../components/ui/layout/SortableTab";
import { MdTerminal } from "react-icons/md";
import { VscPlay } from "react-icons/vsc";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import useTerminalStore from "../../store/useTerminalStore";
import {
  formatPath,
  getBreadcrumb,
} from "../../components/logic/layout/tabUtils";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

const MainLayout = () => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const { tabs, activeTab, setActiveTab, closeTab, openTab, reorderTabs } =
    useTabStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal);
  const breadcrumb = getBreadcrumb(location.pathname);
  console.log("breadcrumb", breadcrumb);

  useEffect(() => {
    const pathname = location.pathname;
    const displayName = formatPath(pathname);

    if (!tabs.find((tab) => tab.path === pathname)) {
      openTab(displayName, pathname);
    } else {
      setActiveTab(pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (activeTab !== null) {
      navigate(activeTab);
    }
  }, [activeTab]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tabs.findIndex((t) => t.path === active.id);
      const newIndex = tabs.findIndex((t) => t.path === over?.id);
      reorderTabs(arrayMove(tabs, oldIndex, newIndex));
    }
  };

  return (
    <div className="container m-0 mx-auto flex h-screen flex-col bg-dark p-0">
      <div className="h-[5%] w-full border-b border-border bg-dark text-white">
        <Header />
      </div>
      <div className="middle-box flex h-[91%] w-[100%] flex-row">
        <div className="social-media-icons flex w-[50px] items-start justify-center border-r border-border">
          <SocialMediaIcons />
        </div>
        <div className="h-full min-w-0 flex-1">
          <div className="flex h-full w-[100%] border border-border">
            <div
              className={`left-side-box-for-sidebar h-full border-r border-border bg-dark text-white transition-all duration-300 ${
                isSidebarOpen ? "w-44" : "w-0"
              }`}
            >
              <Sidebar />
            </div>

            {/* Right side takes the remaining width */}
            <div className="right-side-box-for-outlet flex h-full min-w-0 flex-1 flex-col items-center justify-center bg-dark2">
              <div className="nav-path flex h-[5%] w-full items-center justify-between overflow-x-auto border-b border-border px-5 font-code text-xs text-gray-400">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToHorizontalAxis]}
                >
                  <SortableContext
                    items={tabs.map((t) => t.path)}
                    strategy={horizontalListSortingStrategy}
                  >
                    <div className="flex h-full w-[85%] items-center gap-[5px] overflow-x-hidden overflow-y-hidden whitespace-nowrap font-code">
                      {tabs.map((tab) => (
                        <SortableTab
                          key={tab.path}
                          tab={tab}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                          closeTab={closeTab}
                          navigate={navigate}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
                <div className="w-[15%]">
                  <div className="flex h-full w-full items-center justify-end gap-[8px]">
                    <span onClick={toggleSidebar} className="cursor-pointer">
                      {isSidebarOpen ? (
                        <PanelLeftClose size={22} />
                      ) : (
                        <PanelLeftOpen size={22} />
                      )}
                    </span>
                    <MdTerminal
                      className="cursor-pointer"
                      onClick={toggleTerminal}
                      size={25}
                    />
                    <VscPlay
                      size={22}
                      className="cursor-pointer"
                      onClick={() =>
                        useTerminalStore.getState().openTerminalWithRun()
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="under-nav-path h-[95%] w-[100%] flex-row">
                <div className="h-full w-[100%]">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[4%] w-full bg-dark">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
